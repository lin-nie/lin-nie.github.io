import pub0 from '../assets/publications/pub-0.jpg'
import pub1 from '../assets/publications/pub-1.jpg'
import pub2 from '../assets/publications/pub-2.jpg'
import pub3 from '../assets/publications/pub-3.jpg'
import pub4 from '../assets/publications/pub-4.jpg'
import pub5 from '../assets/publications/pub-5.jpg'
import pub6 from '../assets/publications/pub-6.jpg'

export interface PublicationLinks {
  image: string
  isNew?: boolean
  paper?: string
  project?: string
  code?: string
  video?: string
  openreview?: string
}

// Ordered newest-first, matching each language's `publications` array.
export const publicationLinks: PublicationLinks[] = [
  {
    image: pub6,
    isNew: true,
    paper: 'https://openreview.net/pdf?id=96jZFqM5E0',
    openreview: 'https://openreview.net/forum?id=96jZFqM5E0',
    project: 'https://tkhkaeio.github.io/projects/25-simhand/index.html',
    code: 'https://github.com/ut-vision/SiMHand',
  },
  {
    image: pub5,
    isNew: true,
    paper: 'https://arxiv.org/abs/2409.16816',
  },
  {
    image: pub4,
    paper: 'https://aclanthology.org/2024.emnlp-main.797.pdf',
    code: 'https://github.com/minglllli/CLIPFit',
  },
  {
    image: pub3,
    paper: 'https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/03682.pdf',
    project: 'https://sites.google.com/view/hands2023/home',
  },
  {
    image: pub2,
    paper: 'https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/03682.pdf',
    project: 'https://sites.google.com/view/hands2023/home',
  },
  {
    image: pub1,
    paper: 'https://arxiv.org/abs/2207.05409',
    code: 'https://github.com/dzy3/KCD',
  },
  {
    image: pub0,
    paper: 'https://arxiv.org/abs/2207.03095',
    project: 'http://www.linnie.com.cn/projects/uda_action/',
    code: 'https://github.com/lin-nie/EPIC-KITCHENS-C4-UDA',
    video: 'https://www.youtube.com/watch?v=BnVhNeUBau4',
  },
]
