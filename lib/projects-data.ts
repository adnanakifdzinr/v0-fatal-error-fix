export interface Project {
  id: string
  title: string
  category: string
  industry: string
  image: string
  slug: string
  tags?: string[]
  services: string[]
  images?: string[]
}

export const projectsData: Project[] = [
  {
    id: "1",
    title: "KRINK",
    slug: "krink",
    services: [
      "Brand Strategy",
      "Brand Identity",
      "Visual System",
      "Typography System",
      "Packaging Design",
      "SKU Variants Created",
      "Brand Application Mockups",
    ],
    images: [
      "https://simontype.com/wp-content/uploads/2026/02/KRINK-01.jpeg",
      "https://simontype.com/wp-content/uploads/2026/02/KRINK-02.jpeg",
      "https://simontype.com/wp-content/uploads/2026/02/KRINK-03.jpeg",
      "https://simontype.com/wp-content/uploads/2026/02/KRINK-04.jpeg",
      "https://simontype.com/wp-content/uploads/2026/02/KRINK-05.jpeg",
      "https://simontype.com/wp-content/uploads/2026/02/KRINK-06.jpeg",
      "https://simontype.com/wp-content/uploads/2026/02/KRINK-07.jpeg",
      "https://simontype.com/wp-content/uploads/2026/02/KRINK-08-scaled.jpeg",
      "https://simontype.com/wp-content/uploads/2026/02/KRINK-09.jpeg",
      "https://simontype.com/wp-content/uploads/2026/02/KRINK-10.jpeg",
    ],
  },
  {
    id: "2",
    title: "Luvena",
    category: "Logo & Branding",
    industry: "FOOD & BEVERAGE",
    image: "https://bq45eawil9xlp5ci.public.blob.vercel-storage.com/Luvena01.jpg",
    slug: "luvena",
    tags: ["Pizza", "Food", "Packaging"],
    services: [
      "Brand Identity",
      "Logo Design",
      "Packaging Design",
      "Food Photography Styling",
      "Label & Print Materials",
      "Brand Guidelines",
      "Social Media Assets",
    ],
    images: [
      "https://guxjkdyjeyrscewv.public.blob.vercel-storage.com/Luvena-01.jpg",
      "https://guxjkdyjeyrscewv.public.blob.vercel-storage.com/Luvena-02.jpg",
      "https://guxjkdyjeyrscewv.public.blob.vercel-storage.com/Luvena-03.jpg",
      "https://guxjkdyjeyrscewv.public.blob.vercel-storage.com/Luvena-04.jpg",
      "https://guxjkdyjeyrscewv.public.blob.vercel-storage.com/Luvena-05.jpg",
      "https://guxjkdyjeyrscewv.public.blob.vercel-storage.com/Luvena-06.jpg",
      "https://guxjkdyjeyrscewv.public.blob.vercel-storage.com/Luvena-01.jpg",
      "https://guxjkdyjeyrscewv.public.blob.vercel-storage.com/Luvena-02.jpg",
      "https://guxjkdyjeyrscewv.public.blob.vercel-storage.com/Luvena-03.jpg",
      "https://guxjkdyjeyrscewv.public.blob.vercel-storage.com/Luvena-04.jpg",
    ],
  },
  {
    id: "3",
    title: "Rijq",
    category: "Food & Bakery",
    industry: "BAKERY",
    image: "https://q4bkxvdmgiqmmhbe.public.blob.vercel-storage.com/Frame%201.jpg",
    slug: "rijq",
    tags: ["Food", "Bakery", "Branding"],
    services: [
      "Logo & Symbol Design",
      "Brand Color Palette",
      "Typography Selection",
      "Packaging Design",
      "In-Store Signage",
      "Digital Brand Assets",
      "Menu Design",
    ],
    images: [
      "https://guxjkdyjeyrscewv.public.blob.vercel-storage.com/Rijq-01.jpg",
      "https://guxjkdyjeyrscewv.public.blob.vercel-storage.com/Rijq-02.jpg",
      "https://guxjkdyjeyrscewv.public.blob.vercel-storage.com/Rijq-03.jpg",
      "https://guxjkdyjeyrscewv.public.blob.vercel-storage.com/Rijq-04.jpg",
      "https://guxjkdyjeyrscewv.public.blob.vercel-storage.com/Rijq-05.jpg",
      "https://guxjkdyjeyrscewv.public.blob.vercel-storage.com/Rijq-06.jpg",
      "https://guxjkdyjeyrscewv.public.blob.vercel-storage.com/Rijq-07.jpg",
      "https://guxjkdyjeyrscewv.public.blob.vercel-storage.com/Rijq-01.jpg",
      "https://guxjkdyjeyrscewv.public.blob.vercel-storage.com/Rijq-02.jpg",
      "https://guxjkdyjeyrscewv.public.blob.vercel-storage.com/Rijq-03.jpg",
    ],
  },
  {
    id: "4",
    title: "Cnyf",
    category: "Crypto",
    industry: "CRYPTO",
    image: "https://guxjkdyjeyrscewv.public.blob.vercel-storage.com/Frame%208.jpg",
    slug: "cnyf",
    tags: ["Crypto", "Wallet", "Money"],
    services: [
      "Crypto Branding Strategy",
      "Logo & Icon Design",
      "UI/UX Design System",
      "Wallet Interface Design",
      "Security Visual Language",
      "Marketing Materials",
      "Technical Documentation Design",
    ],
    images: [
      "https://guxjkdyjeyrscewv.public.blob.vercel-storage.com/Frame%201.jpg",
      "https://guxjkdyjeyrscewv.public.blob.vercel-storage.com/Frame%202.jpg",
      "https://guxjkdyjeyrscewv.public.blob.vercel-storage.com/Frame%203.jpg",
      "https://guxjkdyjeyrscewv.public.blob.vercel-storage.com/Frame%204.jpg",
      "https://guxjkdyjeyrscewv.public.blob.vercel-storage.com/Frame%205.jpg",
      "https://guxjkdyjeyrscewv.public.blob.vercel-storage.com/Frame%206.jpg",
      "https://guxjkdyjeyrscewv.public.blob.vercel-storage.com/Frame%208.jpg",
      "https://guxjkdyjeyrscewv.public.blob.vercel-storage.com/Frame%209.jpg",
      "https://guxjkdyjeyrscewv.public.blob.vercel-storage.com/Frame%201.jpg",
      "https://guxjkdyjeyrscewv.public.blob.vercel-storage.com/Frame%202.jpg",
    ],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find((project) => project.slug === slug)
}
