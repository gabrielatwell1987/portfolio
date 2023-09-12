<script>
    import { TextInput, TextArea, Button, FormGroup, Form, InlineNotification } from "carbon-components-svelte";
    import { createForm } from "svelte-forms-lib";
    import { supabase } from "../supabaseClient";
    import * as yup from "yup";

    const validationSchema = yup.object().shape({
        name: yup.string().required('Please enter a name'),
        email: yup.string().email().required('Please enter a valid email'),
        message: yup.string().required('Please enter a message')
    });

    let apiResult = null;

    const { form, errors, handleChange, handleSubmit, isSubmitting } = createForm({
        initialValues: { name: "", email: "", message: "" },
        validationSchema: validationSchema,
        onSubmit: async values => {

            try {
                var result = await supabase.from("contact").insert(values);

                if (result.data != null) {
                    apiResult = true;
                } else {
                    apiResult = false;
                }
            } catch (ex) {
                apiResult = false;
            }

            handleReset();
        }
    });
</script>

<div class="page">
    <h2>Contact Me</h2>
    <p>Enter the details to get in touch with me.</p>

    <br><br>

    {#if apiResult != null}
        {#if apiResult == true}
            <InlineNotification
                lowContrast
                kind="success"
                title="Success:"
                subtitle="Your message has been received"
            />
        {:else}
            <InlineNotification 
                lowContrast 
                kind="error"
                title="Error:"
                subtitle="An internal server error occurred."
            />

        {/if}  
    {/if}

    <Form on:submit={handleSubmit}>

        <FormGroup>
            <TextInput labelText="Name" name="name" 
                on:change={handleChange} bind:value={$form.name}
                invalid={$errors.name.length > 0} invalidText={$errors.name}/>
        </FormGroup>
    
        <FormGroup>
            <TextInput labelText="Email" name="email" type="email" 
                on:change={handleChange} bind:value={$form.email}
                invalid={$errors.email.length > 0} invalidText={$errors.email}/>
        </FormGroup>
    
        
        <FormGroup>
            <TextArea labelText="Message" name="message" type="textarea"
                on:change={handleChange} bind:value={$form.message}
                invalid={$errors.message.length > 0} invalidText={$errors.message}/>
        </FormGroup>
  
        <Button type="submit" disabled={$isSubmitting}>Submit</Button>
    </Form>
</div>

<style>
    .page {
        margin: 40px;
    }
</style>