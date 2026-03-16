import {
    Group,
    Mesh,
    MeshStandardMaterial,
    PlaneGeometry,
    RepeatWrapping,
    SRGBColorSpace,
    Texture,
    TextureLoader,
} from 'three'
import { Tree } from './objects/Tree'
import { Rock } from './objects/Rock'
import { Bush } from './objects/Bush'

const grassUrl =
    'https://cdn.jsdelivr.net/gh/gabrielatwell1987/portfolio-assets@main/images/grassy-dirt.webp'

function loadGrassTexture(): Texture | null {
    if (typeof document === 'undefined') return null

    const texture = new TextureLoader().load(grassUrl)
    texture.wrapS = RepeatWrapping
    texture.wrapT = RepeatWrapping
    texture.colorSpace = SRGBColorSpace
    return texture
}

export class World extends Mesh {
    width: number
    height: number

    trees!: Group
    rocks!: Group
    bushes!: Group

    rockCount: number
    bushCount: number
    treeCount: number

    treeCells: Set<string>
    rockCells: Set<string>
    bushCells: Set<string>

    treeDensity: number
    rockDensity: number
    bushDensity: number

    private grassTexture: Texture | null = null

    constructor(width: number, height: number) {
        super()

        this.width = width
        this.height = height

        this.treeDensity = 3 / 250
        this.rockDensity = 5 / 250
        this.bushDensity = 4 / 175

        this.treeCount = 3
        this.rockCount = 5
        this.bushCount = 4

        this.treeCells = new Set<string>()
        this.rockCells = new Set<string>()
        this.bushCells = new Set<string>()

        this.grassTexture = loadGrassTexture()
    }

    private updateCountFromSize() {
        const cols = Math.max(1, Math.floor(this.width))
        const rows = Math.max(1, Math.floor(this.height))
        const totalCells = cols * rows

        this.treeCount = Math.min(
            totalCells,
            Math.round(totalCells * this.treeDensity),
        )
        this.rockCount = Math.min(
            totalCells,
            Math.round(totalCells * this.rockDensity),
        )
        this.bushCount = Math.min(
            totalCells,
            Math.round(totalCells * this.bushDensity),
        )
    }

    async generate(recalculateFromDensity = true) {
        this.clear()
        if (recalculateFromDensity) this.updateCountFromSize()
        this.createTerrain()
        await this.createTrees()
        await this.createRocks()
        await this.createBushes()
    }

    clear() {
        if (this.geometry) {
            this.geometry.dispose()
            ;(this.material as MeshStandardMaterial).dispose()
        }

        if (this.trees) {
            this.trees.children.forEach((tree) => {
                ;(tree as Mesh).geometry?.dispose()
                ;((tree as Mesh).material as MeshStandardMaterial)?.dispose()
            })
            this.trees.clear()
        }

        if (this.rocks) {
            this.rocks.children.forEach((rock) => {
                ;(rock as Mesh).geometry?.dispose()
                ;((rock as Mesh).material as MeshStandardMaterial)?.dispose()
            })
            this.rocks.clear()
        }

        if (this.bushes) {
            this.bushes.children.forEach((bush) => {
                ;(bush as Mesh).geometry?.dispose()
                ;((bush as Mesh).material as MeshStandardMaterial)?.dispose()
            })
            this.bushes.clear()
        }

        this.treeCells.clear()
        this.rockCells.clear()
        this.bushCells.clear()

        return this
    }

    createTerrain() {
        if (!this.grassTexture) this.grassTexture = loadGrassTexture()

        const cols = Math.max(1, Math.floor(this.width))
        const rows = Math.max(1, Math.floor(this.height))

        if (this.grassTexture) {
            this.grassTexture.wrapS = RepeatWrapping
            this.grassTexture.wrapT = RepeatWrapping
            this.grassTexture.repeat.set(cols, rows)
            this.grassTexture.needsUpdate = true
        }

        // geometry with more segments for deformation
        this.geometry = new PlaneGeometry(
            this.width,
            this.height,
            cols * 2,
            rows * 2,
        )

        // random height displacement
        const positionAttribute = this.geometry.getAttribute('position')
        const positions = positionAttribute.array as Float32Array

        for (let i = 0; i < positions.length; i += 3) {
            const x = positions[i]
            const z = positions[i + 2]

            const hillHeight =
                Math.sin(x * 0.3) * 1.5 +
                Math.sin(z * 0.3) * 1.5 +
                Math.sin((x + z) * 0.2) * 1.0 +
                (Math.random() - 0.5) * 0.5

            positions[i + 1] += hillHeight
        }

        positionAttribute.needsUpdate = true
        this.geometry.computeVertexNormals()

        this.material = new MeshStandardMaterial({
            map: this.grassTexture ?? null,
        })

        this.rotation.x = -Math.PI / 2
        this.position.set(this.width / 2, 0, this.height / 2)
    }

    async createTrees() {
        if (!this.trees) {
            this.trees = await Tree.createTrees(
                this.width,
                this.height,
                this.treeCount,
                this.treeCells,
            )
            this.add(this.trees)
        } else {
            this.remove(this.trees)
            this.trees = await Tree.createTrees(
                this.width,
                this.height,
                this.treeCount,
                this.treeCells,
            )
            this.add(this.trees)
        }
    }

    async createRocks() {
        if (!this.rocks) {
            this.rocks = await Rock.createRocks(
                this.width,
                this.height,
                this.rockCount,
                this.rockCells,
                this.treeCells,
            )
            this.add(this.rocks)
        } else {
            this.remove(this.rocks)
            this.rocks = await Rock.createRocks(
                this.width,
                this.height,
                this.rockCount,
                this.rockCells,
                this.treeCells,
            )
            this.add(this.rocks)
        }
    }

    async createBushes() {
        if (!this.bushes) {
            this.bushes = await Bush.createBushes(
                this.width,
                this.height,
                this.bushCount,
                this.bushCells,
                this.treeCells,
                this.rockCells,
            )
            this.add(this.bushes)
        } else {
            this.remove(this.bushes)
            this.bushes = await Bush.createBushes(
                this.width,
                this.height,
                this.bushCount,
                this.bushCells,
                this.treeCells,
                this.rockCells,
            )
            this.add(this.bushes)
        }
    }
}
