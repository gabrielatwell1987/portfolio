export const API_BASE = 'https://blog-backend-kgtm.onrender.com';

export async function fetchPostMd(id: string): Promise<string | null> {
    try {
        const res = await fetch(`${API_BASE}/api/md/${id}`);
        if (res.ok) return await res.text();
    } catch {
        // fall through
    }
    return null;
}
