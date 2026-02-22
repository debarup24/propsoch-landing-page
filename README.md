# Part 1: Analysis

Lighthouse Score :

The current Lighthouse score shows strong SEO (100), Performance (68), Accessibility (77) and Best Practices (77)
It indicates that we need some improvement.

Performance 68 means the website is little bit slow. The reason could be the heavy images, large JS bundles or render-blocking resources

# To solve this, we can do -

      1. Using Next.js next/image for automatic image optimization
      2. Compress images and use modern formats (WebP/AVIF)

Accessibility 77 suggests Missing alt text in images, Low color contrast, Buttons without labels or Lack of proper semantic HTML elements ( header, section, nav, main, footer)

I tried to maintain the semantic tags in my code.

Best Practices 77 means there some technical issues exist. It may be -

       1. Deprecated APIs
       2. Console warnings
       3. Large or unoptimized assets

SEO is Strong

# 5 UI/UX Issues I Observed :

1. in the customer testimonial section, testimonial cards aren’t perfectly aligned. I fixed it in my code and made it a pinterest style Masonry Grid for web and carousel with autoscroll effect for mobile screen

2. In the product differentiation section, while comparing with online and local brokers, after changing the tab the width of the cell of the table is changing, it causes eye disturbance. I fixed this issue in my code

3. Go to search → search any location – click on that location – you will redirect to : “https://www.propsoch.com/buy/property-for-sale-in-[location]” page .
   Now reload the page , you'll see some issue with repaint in screen, for a microsecond the ROI section is coming first in screen then the List of the property.
   This List is coming from API Call, there might have changes that in code “useEffect” has been used but we also need useLayoutEffect hook, so it can be a custom hook - useEffect + useLayoutEffect hook to fix this, but I need to check the code first

4. Below the research Insights accordion, we have a light purple banner, it has two buttons, one button which is “Book an appointment” – is not working, after clicking, it redirects to error 404 page.

5. In https://www.propsoch.com/buy/property-for-sale-in-[location]” page pagination is working but UI painting is not eye smoothing
