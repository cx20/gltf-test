# glTF 2.0 Sample Models

## Simple models for testing individual features

| Model                                                  | Screenshot                                                      | Description |
|--------------------------------------------------------|-----------------------------------------------------------------|-------------|
| [Triangle Without Indices](TriangleWithoutIndices)     | ![](TriangleWithoutIndices/screenshot/screenshot.png)           | The simplest possible glTF asset: A single `scene` with a single `node` and a single `mesh` with a single `mesh.primitive` with a single triangle with a single attribute, without indices and without a `material` |
| [Triangle](Triangle)                                   | ![](Triangle/screenshot/screenshot.png)                         | A very simple glTF asset: The basic structure is the same as in [Triangle Without Indices](TriangleWithoutIndices), but here, the `mesh.primitive` describes an *indexed* geometry
| [Animated Triangle](AnimatedTriangle)                  | ![](AnimatedTriangle/screenshot/screenshot.gif)                 | This sample is similar to the [Triangle](Triangle), but the `node` has a `rotation` property that is modified with a simple `animation` |
| [Animated Morph Cube](AnimatedMorphCube)               | ![](AnimatedMorphCube/screenshot/screenshot.gif)                | Demonstrates a simple cube with two simple morph targets and an animation that transitions between them both. |
| [Animated Morph Sphere](AnimatedMorphSphere)           | ![](AnimatedMorphSphere/screenshot/screenshot.gif)              | This sample is similar to the [Animated Morph Cube](AnimatedMorphCube), but the two morph targets move many more vertices and are more extreme than with the cube. |
| [Simple Meshes](SimpleMeshes)                          | ![](SimpleMeshes/screenshot/screenshot.png)                     | A simple `scene` with two `nodes`, both containing the same `mesh`, namely a `mesh` with a single `mesh.primitive` with a single indexed triangle with *multiple* attributes (positions, normals and texture coordinates), but without a `material` |
| [Simple Morph](SimpleMorph)                            | ![](SimpleMorph/screenshot/screenshot.png)                      | A triangle with a morph animation applied |
| [Simple Sparse Accessor](SimpleSparseAccessor)         | ![](SimpleSparseAccessor/screenshot/screenshot.png)             | A simple mesh that uses sparse accessors |
| [Simple Skin](SimpleSkin)                              | ![](SimpleSkin/screenshot/screenshot.gif)                       | A simple example of vertex skinning in glTF
| [Cameras](Cameras)                                     | ![](Cameras/screenshot/screenshot.png)                          | A sample with two different `camera` objects |
| [Interpolation Test](InterpolationTest)                | ![](InterpolationTest/screenshot/screenshot.gif)                | A sample with three different `animation` interpolations |

## PBR models

| Model                                         | Screenshot                                       | Normal Map         | Occlusion Map      | Emissive Map       |
|-----------------------------------------------|:------------------------------------------------:|:------------------:|:------------------:|:------------------:|
| [Avocado](Avocado)                            | ![](Avocado/screenshot/screenshot.jpg)           | :white_check_mark: |                    |                    |
| [Barramundi Fish](BarramundiFish)             | ![](BarramundiFish/screenshot/screenshot.jpg)    | :white_check_mark: | :white_check_mark: |                    |
| [Boom Box](BoomBox)                           | ![](BoomBox/screenshot/screenshot.jpg)           | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| [Corset](Corset)                              | ![](Corset/screenshot/screenshot.jpg)            | :white_check_mark: | :white_check_mark: |                    |
| [Damaged Helmet](DamagedHelmet)               | ![](DamagedHelmet/screenshot/screenshot.png)     | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| [Flight Helmet](FlightHelmet)                 | ![](FlightHelmet/screenshot/screenshot.jpg)      | :white_check_mark: | :white_check_mark: |                    |
| [Lantern](Lantern)                            | ![](Lantern/screenshot/screenshot.jpg)           | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| [Water Bottle](WaterBottle)                   | ![](WaterBottle/screenshot/screenshot.jpg)       | :white_check_mark: | :white_check_mark: | :white_check_mark: |

## Further PBR models

| Model                                                  | Screenshot                                                      | Description |
|--------------------------------------------------------|-----------------------------------------------------------------|-------------|
| [Two Sided Plane](TwoSidedPlane)                       | ![](TwoSidedPlane/screenshot/screenshot.jpg)                    | A plane having the two sided material parameter enabled.       |
| [Cube](Cube)                                           | ![](Cube/screenshot/screenshot.jpg)                             | A cube with non-smoothed faces.                                |
| [Animated Cube](AnimatedCube)                          | ![](AnimatedCube/screenshot/screenshot.gif)                     | Same as previous cube having a linear rotation animation.      |
| [Suzanne](Suzanne)                                     | ![](Suzanne/screenshot/screenshot.jpg)                          | Suzanne from Blender with smoothed faces.                      |
| [Sci Fi Helmet](SciFiHelmet)                           | ![](SciFiHelmet/screenshot/screenshot.jpg)                      | Sci Fi Helmet having unsigned integer indices.                 |
| [Antique Camera](AntiqueCamera)                        | ![](AntiqueCamera/screenshot/screenshot.png)                    | Old camera model having various materials.                       |

## Extension Test Models

| Model                                                     | Screenshot                                                    | Description |
|-----------------------------------------------------------|---------------------------------------------------------------|-------------|
| [Clearcoat Test](ClearCoatTest)                           | ![](ClearCoatTest/screenshot/screenshot.jpg)                  | Tests if the KHR_materials_clearcoat extension is supported properly. |
| [Environment Test](EnvironmentTest)                       | ![](EnvironmentTest/screenshot/screenshot.png)                | A simple `scene` with metal and dielectric spheres that range between 0 and 1 roughness. Useful for testing environment lighting. |
| [SpecGloss Vs MetalRough](SpecGlossVsMetalRough)          | ![](SpecGlossVsMetalRough/screenshot/screenshot.jpg)          | Tests if the KHR_materials_pbrSpecularGlossiness extension is supported properly. |
| [Texture Transform Test](TextureTransformTest)            | ![](TextureTransformTest/screenshot/screenshot.jpg)           | Tests if the KHR_texture_transform extension is supported for BaseColor. |
| [Texture Transform Multi Test](TextureTransformMultiTest) | ![](TextureTransformMultiTest/screenshot/screenshot.jpg)      | Tests if the KHR_texture_transform extension is supported for several inputs. |
| [Unlit Test](UnlitTest)                                   | ![](UnlitTest/screenshot/screenshot.png)                      | Tests if the KHR_materials_unlit extension is supported properly. |
