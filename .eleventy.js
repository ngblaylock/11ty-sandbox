module.exports = eleventyConfig => {
  // Copy our static assets to the output folder
  eleventyConfig.addPassthroughCopy('styles');
  eleventyConfig.addPassthroughCopy('js');
  eleventyConfig.addPassthroughCopy('img');
  eleventyConfig.addPassthroughCopy('CNAME');

  // Returning something from the configuration function is optional
  return {
    dir: {
      output: 'docs'
    }
  };
};