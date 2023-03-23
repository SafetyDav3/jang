# J.A.N.G.
## Just Another NFT Generator

To use this application need to first create your layers in Photoshop and group them into folders according to the potential layer catagories.
<br>
<br>
# Sources
This is a JavaScript program that generates NFTs (Non-Fungible Tokens) by combining multiple layers of images. It uses the following dependencies:

* merge-images to merge the images.<br>
* node-canvas to create a canvas for the merged images.<br>
* path and fs for file system operations.<br>
* random-js for random number generation.<br>
<br>
# Run program
After the layers are in there own folders run `"node index.js"`
<br>
This will create a series of images from the layers in a `".png"` format and place them in the `"output/images"` folder. At the same time the associated metadata will be placed in the `"output/metadata"` folder.
<br> 
<br> 
Next you create a collection at an IPFS service and collect the `"http://ipfs..."` style address and CID. You then put this information into the "update.js" file and run it with `"node update.js"`.
<br> 
This will then change the metadata sequentially according to the file name.
