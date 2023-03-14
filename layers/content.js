module.exports = {
  metadataTemplate: (tokenId, attributes) => ({
    image: "<%IMAGE_URL%>",
    name: `NFT #${tokenId}`,
    external_url: "https://www.kie.codes/",
    description: "Please subscribe!",
    attributes: attributes,
  }),
  layers: [
    {
      name: "Background",
      probability: 1.0,
      options: [
        {
          name: "Center Green to Purple",
          file: "background/center_green_purple.png",
          weight: 1,
        },
        {
          name: "Center Yellow to Green",
          file: "background/center_yellow_green.png",
          weight: 1,
        },
        {
          name: "Center Yellow to Red",
          file: "background/center_yellow_orange.png",
          weight: 1,
        },
        {
          name: "Center Yellow to Purple",
          file: "background/center_yellow_purple.png",
          weight: 1,
        },
        {
          name: "Gradient Green to Yellow",
          file: "background/grad_green_yellow.png",
          weight: 1,
        },
        {
          name: "Gradient Purple to Green",
          file: "background/grad_purple_green.png",
          weight: 1,
        },
        {
          name: "Gradient White to Black",
          file: "background/grad_white_black.png",
          weight: 1,
        },
      ],
    },
    {
      name: "Edge",
      probability: 1.0,
      options: [
        {
          name: "Gear Thick",
          file: "border/gear_thick.png",
          weight: 1,
        },
        {
          name: "Gear Thin",
          file: "border/gear_thin.png",
          weight: 1,
        },
        {
          name: "Gear",
          file: "border/gear.png",
          weight: 1,
        },
        {
          name: "Ridges Thick",
          file: "border/ridges_thick.png",
          weight: 1,
        },
        {
          name: "Ridges Thin",
          file: "border/ridges_thin.png",
          weight: 1,
        },
        {
          name: "Ridges",
          file: "border/ridges.png",
          weight: 1,
        },
        {
          name: "Smooth Thick",
          file: "border/smooth_thick.png",
          weight: 1,
        },
        {
          name: "Smooth Thin",
          file: "border/smooth_thin.png",
          weight: 1,
        },
        {
          name: "Smooth",
          file: "border/smooth.png",
          weight: 1,
        },
      ],
    },
    {
      name: "Coin",
      probability: 1.0,
      options: [
        {
          name: "Coin Copper",
          file: "coin/color_copper.png",
          weight: 1,
        },
        {
          name: "Coin Gold",
          file: "coin/color_gold.png",
          weight: 1,
        },
        {
          name: "Coin Platinum",
          file: "coin/color_platinum.png",
          weight: 1,
        },
        {
          name: "Coin Silver",
          file: "coin/color_silver.png",
          weight: 1,
        },
      ],
    },
  ],
};
