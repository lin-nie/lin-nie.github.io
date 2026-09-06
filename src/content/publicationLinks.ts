import pub0 from '../assets/publications/pub-0.jpg'
import pub1 from '../assets/publications/pub-1.jpg'
import pub2 from '../assets/publications/pub-2.jpg'
import pub3 from '../assets/publications/pub-3.jpg'
import pub4 from '../assets/publications/pub-4.jpg'
import pub5 from '../assets/publications/pub-5.jpg'
import pub6 from '../assets/publications/pub-6.jpg'
import pub6Teaser from '../assets/publications/simhand-teaser.mp4'
import pub7 from '../assets/publications/pub-7.png'
import pub8 from '../assets/publications/pub-8.jpg'
import pub8Teaser from '../assets/publications/simdex-teaser.mp4'
import iclrIcon from '../assets/venues/iclr.png'

export interface PublicationLinks {
  image: string
  teaserVideo?: string
  isNew?: boolean
  paper?: string
  paperComingSoon?: boolean
  project?: string
  projectComingSoon?: boolean
  code?: string
  video?: string
  openreview?: string
  dataset?: string
  venueIcon?: string
  extraLinks?: { label: string; url: string }[]
}

// Ordered newest-first, matching each language's `publications` array.
export const publicationLinks: PublicationLinks[] = [
  {
    image: pub8,
    teaserVideo: pub8Teaser,
    isNew: true,
    paper: 'https://arxiv.org/abs/2608.04196',
    project: 'https://lin-nie.github.io/SiMDex/',
    video: 'https://www.youtube.com/watch?v=SsqdK0xTtzY',
  },
  {
    image: pub7,
    isNew: true,
    paper: 'https://arxiv.org/abs/2506.01353',
    project: 'https://lin-nie.github.io/',
    dataset: 'https://huggingface.co/datasets/ut-vision/EgoBrain',
    extraLinks: [{ label: 'EgoBrain-Mini', url: 'https://huggingface.co/datasets/ut-vision/EgoBrain-Mini' }],
    openreview: 'https://openreview.net/forum?id=DGcoJINQ7P',
    venueIcon: iclrIcon,
  },
  {
    image: pub6,
    teaserVideo: pub6Teaser,
    paper: 'https://openreview.net/pdf?id=96jZFqM5E0',
    openreview: 'https://openreview.net/forum?id=96jZFqM5E0',
    project: 'https://tkhkaeio.github.io/projects/25-simhand/index.html',
    code: 'https://github.com/ut-vision/SiMHand',
    venueIcon: iclrIcon,
  },
  {
    image: pub5,
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
