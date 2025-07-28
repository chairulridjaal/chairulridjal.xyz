# Blog Management Guide

This guide explains how to add new blog posts to your website.

## Adding a New Blog Post

### 1. Prepare Your Content

- Write your blog post content
- Choose or create a header image (800x400px recommended)
- Create a URL-friendly slug (e.g., "my-new-post")

### 2. Add the Image

- Place your header image in `/public/assets/images/blog/`
- Use a descriptive filename (e.g., `my-new-post-hero.jpg`)

### 3. Add Blog Data

Edit `/src/data/blogData.ts` and add a new blog post object to the `blogPosts` array:

```typescript
{
  id: 4, // Next available ID
  title: "Your Blog Post Title",
  slug: "your-blog-post-title", // URL-friendly version
  date: "2025-01-20", // Publication date
  excerpt: "A compelling summary of your post...",
  readTime: "8 min read",
  tags: ["tag1", "tag2", "tag3"],
  status: "Published", // or "Draft"
  image: "/assets/images/blog/your-image.jpg",
  imageAlt: "Description of your image",
  content: {
    intro: "Your introduction paragraph...",
    sections: [
      {
        title: "Section Title",
        content: "Section content...",
        code: `// Optional code block
console.log('Hello World');`
      }
      // Add more sections as needed
    ],
    conclusion: "Your conclusion paragraph..."
  },
  author: {
    name: "Your Name",
    bio: "Your bio..."
  },
  seo: {
    metaDescription: "SEO description for search engines...",
    keywords: ["keyword1", "keyword2", "keyword3"]
  }
}
```

### 4. Features Included

#### SEO Optimization

- Automatic meta descriptions
- Open Graph tags for social sharing
- Twitter Card support
- Structured data for search engines

#### Social Sharing

- Native sharing API support
- Fallback to clipboard copy
- Includes title, description, and image

#### URL Structure

- Clean URLs using slugs (`/blog/my-post-title`)
- SEO-friendly structure
- Easy to share and remember

### 5. Best Practices

#### Content

- Keep excerpts under 160 characters
- Use descriptive, keyword-rich titles
- Include relevant tags for categorization
- Write engaging introductions and conclusions

#### Images

- Use high-quality images (800x400px minimum)
- Optimize for web (use compression)
- Include descriptive alt text
- Consider the image's appearance in social shares

#### SEO

- Write unique meta descriptions
- Use relevant keywords naturally
- Create descriptive slugs
- Keep titles under 60 characters for search results

### 6. Publishing Workflow

1. **Draft**: Set `status: "Draft"` while writing
2. **Review**: Check content, formatting, and links
3. **Test**: Verify the post displays correctly
4. **Publish**: Change `status: "Published"`
5. **Share**: Use the built-in sharing functionality

### 7. Future Enhancements

Consider adding:

- Content Management System (CMS) integration
- Database storage for posts
- Comment system
- Newsletter integration
- Analytics tracking
- Related posts suggestions

This system is designed to be simple but powerful, allowing you to focus on writing great content while maintaining professional presentation and SEO optimization.
