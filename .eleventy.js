
module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("fonts");
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("index.js");

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};