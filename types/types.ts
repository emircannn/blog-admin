interface User {
    id: string,
    name : string,
    username : string,
    email : string,
    image : string | null,
    coverImage : string | null,
    password : string | null,
    about : string | null,
    twitter : string | null,
    twitterLink : string | null,
    instagramLink : string | null,
    instagram : string | null,
    facebook : string | null,
    facebookLink : string | null,
    youtube : string | null,
    youtubeLink : string | null,
    role : string,
    isConfirm: boolean
    createdAt : string,
    updatedAt : string,
    articles: Texts[]
    actuals: Actual[]
    contributions: Contributions[]
}

interface CategoryType {
    id: string,
    name: string 
    seo: string 
    image: string 
    createdAt: string 
    updatedAt: string 
    articles: Texts[]
}

interface Magazine {
    createdAt: string
    id: string
    image: string
    readCount: number
    title: string
    seo: string
    file: string,
    desc?: string,
    contributions: Contributions[]
    comments: Comment[]
    updatedAt: string
}

interface Contributions {
    createdAt: string
    endPage: string,
    file: string
    startPage: string,
    title: string 
    id: string
    user: User
    updatedAt: string
    userId: string
    magazineId: string
    magazine: Magazine
}

interface Texts {
    id: string
    title: string
    seo: string
    text: string
    note?: string
    image: string
    comments: Comment[]
    readCount: number
    createdAt: string
    updatedAt: string
    userId: string
    user: User
    categoryId: string
    category: CategoryType
    isSlider: boolean
}

interface Actual {
    id: string
    title: string
    seo: string
    text: string
    note?: string
    image: string
    comments: Comment[]
    readCount: number
    createdAt: string
    updatedAt: string
    userId: string
    user: User
}

interface Comment {
    id: string
    comment: string
    name: string
    email: string
    createdAt: string
    updatedAt: string
    textId?: string
    text?: Texts
    actualId?: string
    actual?: Actual
    magazineId?: string
    magazine?: Magazine
}

interface Settings {
    id: string
    email?: string
    phone?: string
    showReadCount: boolean
    twitter?: string
    twitterLink?: string
    about_us?: string
  }