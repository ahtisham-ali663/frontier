export const heroBanner = {
  firstTitle: {
    value: 'FRONTIER SUPPORT',
  },
  secondTitle: {
    value: 'How can we help you?',
  },
  loggedInSecondTitle: {
    value: 'Hi {{name}}, how can we help you?',
  },
  searchPlaceholder: {
    value: 'Search for quick answers',
  },
  navLinks: {
    list: [
      {
        title: {
          value: 'All',
        },
        href: {
          url: '/help-center',
        },
      },
      {
        title: {
          value: 'Billing',
        },
        href: {
          url: '/help-center/billing',
        },
      },
      {
        title: {
          value: 'Account',
        },
        href: {
          url: '/help-center/account',
        },
      },
      {
        title: {
          value: 'Internet',
        },
        href: {
          url: '/help-center/internet',
        },
      },
      {
        title: {
          value: 'TV & Video',
        },
        href: {
          url: '/help-center/tv-and-video',
        },
      },
      {
        title: {
          value: 'Phone',
        },
        href: {
          url: '/help-center/phone',
        },
      },
      {
        title: {
          value: 'Plans',
        },
        href: {
          url: '/help-center/plans',
        },
      },
    ],
  },
}

const getRandomFAQ = () => {
  const faqList = []
  for (let i = 7; i < 30; i++) {
    faqList.push({
      title: { value: `Question ${i}` },
      description: { value: 'Answer' },
    })
  }
  return faqList
}

export const faqData = {
  title: {
    value: 'FAQs',
  },
  description: {
    value: 'Let us help you find answers to some frequently asked questions.',
  },
  maxCap: {
    value: 25,
  },
  showMoreText: {
    value: 'Show More',
  },
  showLessText: {
    value: 'Show Less',
  },
  schema: {
    value: '{}',
  },
  faqItems: {
    list: [
      {
        title: { value: 'Why is my bill different this month?' },
        description: { value: 'Answer' },
      },
      {
        title: { value: 'What is an early termination fee?' },
        description: { value: 'Answer' },
      },
      {
        title: {
          value:
            'How long does it take to see a credit or an adjustment on my bill?',
        },
        description: { value: 'Answer' },
      },
      {
        title: { value: 'How do I set up Auto Pay?' },
        description: { value: 'Answer' },
      },
      {
        title: { value: 'Where do I find my account number?' },
        description: { value: 'Answer' },
      },
      ...getRandomFAQ(),
    ],
  },
}

export const quickLinks = {
  title: {
    value: 'Quick links',
  },
  links: {
    list: [
      {
        title: {
          value: 'Check for outages',
        },
        href: {
          url: '/help-center/internet/troubleshooting/service-status',
        },
        icon: {
          value: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.9399 15.0537L11.8026 7.91648L13.4146 4.9612C13.7453 4.35486 14.6665 4.58977 14.6665 5.28044V10.666H20.2101C20.7162 10.666 21.0377 11.2076 20.7954 11.6519L18.9399 15.0537Z" fill="#FF0037"></path>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0.666504 11.3327C0.666504 5.44164 5.44213 0.666016 11.3332 0.666016H16.6665C22.5575 0.666016 27.3332 5.44165 27.3332 11.3327V16.666C27.3332 22.5571 22.5575 27.3327 16.6665 27.3327H11.3332C5.44213 27.3327 0.666504 22.5571 0.666504 16.666V11.3327ZM11.3332 3.33268H16.6665C21.0848 3.33268 24.6665 6.9144 24.6665 11.3327V16.666C24.6665 18.8461 23.7945 20.8224 22.3803 22.2654L5.73381 5.6189C7.17676 4.20468 9.15313 3.33268 11.3332 3.33268ZM4.29952 7.51795C3.68325 8.65184 3.33317 9.95138 3.33317 11.3327V16.666C3.33317 21.0843 6.91489 24.666 11.3332 24.666H16.6665C18.0478 24.666 19.3473 24.3159 20.4812 23.6997L16.4324 19.6508L14.5851 23.0374C14.2544 23.6438 13.3332 23.4089 13.3332 22.7182V17.3327H7.78955C7.28351 17.3327 6.96197 16.791 7.20429 16.3468L9.29513 12.5136L4.29952 7.51795Z" fill="#FF0037"></path>
          </svg>`,
        },
      },
      {
        title: {
          value: 'Order Status',
        },
        href: {
          url: '/helpcenter/categories/order-status',
        },
        icon: {
          value: `<svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3.33268H14.6667C17.6688 3.33268 20.3398 4.75009 22.0472 6.9522L13.3333 15.666L9 11.3327L7 13.3327L13.3333 19.666L28.3333 4.66602L26.3333 2.66602L23.9445 5.05484C21.7437 2.37526 18.4048 0.666016 14.6667 0.666016H12C5.37258 0.666016 0 6.0386 0 12.666V15.3327C0 21.9601 5.37258 27.3327 12 27.3327H14.6667C21.2941 27.3327 26.6667 21.9601 26.6667 15.3327V12.666C26.6667 11.9347 26.6012 11.2186 26.4759 10.5234L24 12.9993V15.3327C24 20.4873 19.8213 24.666 14.6667 24.666H12C6.84534 24.666 2.66667 20.4873 2.66667 15.3327V12.666C2.66667 7.51136 6.84534 3.33268 12 3.33268Z" fill="#FF0037"></path>
          </svg>`,
        },
      },
      {
        title: {
          value: 'Pay my bill',
        },
        href: {
          url: '/helpcenter/categories/billing/read-and-pay-my-bill/pay-my-bill',
        },
        icon: {
          value: `<svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.7492 9.24952H18.3328V11.2495H10.083C9.8989 11.2495 9.74966 11.3988 9.74966 11.5828V12.6661C9.74966 12.8502 9.8989 12.9994 10.083 12.9994H16.5828C17.8714 12.9994 18.9161 14.0441 18.9161 15.3328V16.416C18.9161 17.7047 17.8714 18.7493 16.5828 18.7493H14.7492V20.6661H12.7492V18.7493H8.33301V16.7493H16.5828C16.7669 16.7493 16.9161 16.6001 16.9161 16.416V15.3328C16.9161 15.1487 16.7669 14.9994 16.5828 14.9994H10.083C8.79433 14.9994 7.74966 13.9548 7.74966 12.6661V11.5828C7.74966 10.2942 8.79434 9.24952 10.083 9.24952H12.7492V7.33301H14.7492V9.24952Z" fill="#FF0037"></path>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0.333008 11.3327C0.333008 5.44164 5.10864 0.666016 10.9997 0.666016H16.333C22.224 0.666016 26.9997 5.44165 26.9997 11.3327V16.666C26.9997 22.5571 22.224 27.3327 16.333 27.3327H10.9997C5.10864 27.3327 0.333008 22.5571 0.333008 16.666V11.3327ZM10.9997 3.33268H16.333C20.7513 3.33268 24.333 6.9144 24.333 11.3327V16.666C24.333 21.0843 20.7513 24.666 16.333 24.666H10.9997C6.5814 24.666 2.99967 21.0843 2.99967 16.666V11.3327C2.99967 6.9144 6.5814 3.33268 10.9997 3.33268Z" fill="#FF0037"></path>
          </svg>`,
        },
      },
      {
        title: {
          value: 'Run Support wizard',
        },
        href: {
          url: '/helpcenter/supportwizard/troubleshoot/sign-in/get-started',
        },
        icon: {
          value: `<svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.25388 2.40123C3.58057 2.56955 3.58057 3.52643 4.25388 3.69475L5.05001 3.89379C5.28887 3.9535 5.47537 4.14 5.53508 4.37886L5.73411 5.17499C5.90244 5.84829 6.85931 5.84829 7.02764 5.17499L7.22667 4.37886C7.28638 4.14 7.47288 3.9535 7.71174 3.89379L8.50787 3.69475C9.18118 3.52643 9.18118 2.56955 8.50787 2.40123L7.71174 2.2022C7.47288 2.14248 7.28638 1.95598 7.22667 1.71712L7.02764 0.920992C6.85931 0.24769 5.90244 0.247691 5.73411 0.920992L5.53508 1.71712C5.47537 1.95598 5.28887 2.14248 5.05001 2.2022L4.25388 2.40123Z" fill="#FF0037"></path>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M21.7628 16.3793C20.6527 10.8039 18.0428 1.00063 15.0002 1.00063C11.9575 1.00063 9.34761 10.8039 8.23751 16.3793C3.54084 17.435 0.333496 19.5561 0.333496 22.0007C0.333496 25.4985 6.89999 28.334 15.0002 28.334C23.1003 28.334 29.6668 25.4985 29.6668 22.0007C29.6668 19.5561 26.4595 17.435 21.7628 16.3793ZM15.1705 15.6051C14.4972 15.7734 14.4972 16.7303 15.1705 16.8986L15.9666 17.0977C16.2054 17.1574 16.3919 17.3439 16.4517 17.5827L16.6507 18.3789C16.819 19.0522 17.7759 19.0522 17.9442 18.3789L18.1432 17.5827C18.203 17.3439 18.3895 17.1574 18.6283 17.0977L19.1603 16.9647C19.3309 17.8255 19.4615 18.5675 19.5491 19.1344C19.5681 19.2577 19.5842 19.3668 19.5976 19.4624C19.4907 19.5204 19.3534 19.5866 19.1808 19.6568C18.2448 20.0375 16.7681 20.334 15.0002 20.334C13.2323 20.334 11.7555 20.0375 10.8195 19.6568C10.6469 19.5866 10.5097 19.5204 10.4027 19.4624C10.4162 19.3668 10.4322 19.2577 10.4512 19.1344C10.5419 18.5474 10.6787 17.7728 10.8583 16.8729C11.1633 15.3438 11.5835 13.4936 12.0932 11.6338C12.1416 11.6594 12.1952 11.6801 12.2539 11.6948L13.05 11.8938C13.2889 11.9535 13.4754 12.14 13.5351 12.3789L13.7341 13.175C13.9024 13.8483 14.8593 13.8483 15.0276 13.175L15.2267 12.3789C15.2864 12.14 15.4729 11.9535 15.7117 11.8938L16.5079 11.6948C17.1812 11.5264 17.1812 10.5696 16.5079 10.4012L15.7117 10.2022C15.4729 10.1425 15.2864 9.95598 15.2267 9.71712L15.0276 8.92099C14.8593 8.24769 13.9024 8.24769 13.7341 8.92099L13.5351 9.71712C13.4754 9.95598 13.2889 10.1425 13.05 10.2022L12.4596 10.3498C13.0843 8.24956 13.7835 6.34355 14.5015 4.98986C14.6839 4.64589 14.8516 4.36863 15.0002 4.14971C15.1488 4.36863 15.3164 4.64589 15.4988 4.98986C16.2495 6.40526 16.9798 8.42449 17.6257 10.6382C18.1053 12.2819 18.5182 13.9618 18.8464 15.4606L18.6283 15.4061C18.3895 15.3463 18.203 15.1598 18.1432 14.921L17.9442 14.1249C17.7759 13.4516 16.819 13.4516 16.6507 14.1249L16.4517 14.921C16.3919 15.1598 16.2054 15.3463 15.9666 15.4061L15.1705 15.6051ZM15.516 3.53966C15.516 3.53966 15.5117 3.54332 15.5032 3.54874C15.5117 3.54205 15.516 3.53966 15.516 3.53966ZM14.4972 3.54873C14.4886 3.54332 14.4843 3.53966 14.4843 3.53966C14.4843 3.53966 14.4886 3.54205 14.4972 3.54873ZM22.3335 20.0176C22.3335 21.6651 19.0503 23.0006 15.0002 23.0006C10.9501 23.0006 7.66683 21.6651 7.66683 20.0176C7.66683 19.8744 7.69162 19.6126 7.73954 19.2537C6.98554 19.4653 6.29742 19.7066 5.68643 19.9705C4.55824 20.4577 3.81456 20.9691 3.39112 21.4014C3.18663 21.6102 3.08705 21.7696 3.04126 21.8662C3.00011 21.953 3.00015 21.992 3.00016 22.0003V22.001C3.00015 22.0093 3.00011 22.0483 3.04126 22.1351C3.08705 22.2317 3.18663 22.3911 3.39112 22.5999C3.81456 23.0322 4.55824 23.5437 5.68643 24.0308C7.93389 25.0013 11.2249 25.6673 15.0002 25.6673C18.7755 25.6673 22.0664 25.0013 24.3139 24.0308C25.4421 23.5437 26.1858 23.0322 26.6092 22.5999C26.8137 22.3911 26.9133 22.2317 26.9591 22.1351C27.0002 22.0483 27.0002 22.0093 27.0002 22.001V22.0003C27.0002 21.992 27.0002 21.953 26.9591 21.8662C26.9133 21.7696 26.8137 21.6102 26.6092 21.4014C26.1858 20.9691 25.4421 20.4577 24.3139 19.9705C23.7029 19.7066 23.0148 19.4653 22.2608 19.2537C22.3087 19.6126 22.3335 19.8744 22.3335 20.0176Z" fill="#FF0037"></path>
          <path d="M1.58721 12.3614C0.913908 12.1931 0.913907 11.2362 1.58721 11.0679L2.38334 10.8689C2.6222 10.8091 2.8087 10.6226 2.86841 10.3838L3.06745 9.58766C3.23577 8.91436 4.19264 8.91436 4.36097 9.58766L4.56 10.3838C4.61972 10.6226 4.80622 10.8091 5.04507 10.8689L5.84121 11.0679C6.51451 11.2362 6.51451 12.1931 5.84121 12.3614L5.04507 12.5605C4.80622 12.6202 4.61972 12.8067 4.56 13.0455L4.36097 13.8417C4.19264 14.515 3.23577 14.515 3.06745 13.8417L2.86841 13.0455C2.8087 12.8067 2.6222 12.6202 2.38334 12.5605L1.58721 12.3614Z" fill="#FF0037"></path>
          <path d="M23.5872 7.69475C22.9139 7.52643 22.9139 6.56955 23.5872 6.40123L24.3833 6.2022C24.6222 6.14248 24.8087 5.95598 24.8684 5.71712L25.0674 4.92099C25.2358 4.24769 26.1926 4.24769 26.361 4.92099L26.56 5.71712C26.6197 5.95598 26.8062 6.14248 27.0451 6.2022L27.8412 6.40123C28.5145 6.56955 28.5145 7.52643 27.8412 7.69475L27.0451 7.89379C26.8062 7.9535 26.6197 8.14 26.56 8.37886L26.361 9.17499C26.1926 9.84829 25.2358 9.84829 25.0674 9.17499L24.8684 8.37886C24.8087 8.14 24.6222 7.9535 24.3833 7.89379L23.5872 7.69475Z" fill="#FF0037"></path>
          </svg>`,
        },
      },
      {
        title: {
          value: 'Chat with us',
        },
        href: {
          url: '',
        },
        hrefId: {
          value: 'enableChat',
        },
        icon: {
          value: `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M19.3337 3.00065H11.3337C6.91538 3.00065 3.33366 6.58237 3.33366 11.0007V22.1616L0.666992 23.9749V11.0007C0.666992 5.10961 5.44262 0.333984 11.3337 0.333984H19.3337C25.2247 0.333984 30.0003 5.10961 30.0003 11.0007V15.0007C30.0003 20.8917 25.2247 25.6673 19.3337 25.6673H7.53129C7.40231 25.6673 7.2761 25.7047 7.16796 25.775L3.33366 28.2673L0.666992 30.0006V27.1997L6.67923 23.1114C6.95588 23.0382 7.24219 23.0007 7.53129 23.0007H19.3337C23.7519 23.0007 27.3337 19.4189 27.3337 15.0007V11.0007C27.3337 6.58237 23.7519 3.00065 19.3337 3.00065ZM6.66699 13.0007C6.66699 11.8961 7.56242 11.0007 8.66699 11.0007C9.77156 11.0007 10.667 11.8961 10.667 13.0007C10.667 14.1052 9.77156 15.0007 8.66699 15.0007C7.56242 15.0007 6.66699 14.1052 6.66699 13.0007ZM15.3337 11.0007C14.2291 11.0007 13.3337 11.8961 13.3337 13.0007C13.3337 14.1052 14.2291 15.0007 15.3337 15.0007C16.4382 15.0007 17.3337 14.1052 17.3337 13.0007C17.3337 11.8961 16.4382 11.0007 15.3337 11.0007ZM20.0003 13.0007C20.0003 11.8961 20.8958 11.0007 22.0003 11.0007C23.1049 11.0007 24.0003 11.8961 24.0003 13.0007C24.0003 14.1052 23.1049 15.0007 22.0003 15.0007C20.8958 15.0007 20.0003 14.1052 20.0003 13.0007Z" fill="#FF0037"></path>
          </svg>`,
        },
      },
      {
        title: {
          value: 'Ticket status',
        },
        href: {
          url: '/helpcenter/categories/ticket-status',
        },
        icon: {
          value: `<svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.6667 6L21.6667 8L13 16.6667L8.66667 12.3333L10.6667 10.3333L13 12.6667L19.6667 6Z" fill="#FF0037"></path>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M1.98682e-06 0H29.3333V7.28431L28.4443 7.59853C26.63 8.2398 25.3333 9.97019 25.3333 12C25.3333 14.0298 26.63 15.7602 28.4443 16.4015L29.3333 16.7157V24L0 24V16.7157L0.889005 16.4015C2.70332 15.7602 4 14.0298 4 12C4 9.97019 2.70333 8.2398 0.889006 7.59853L1.43051e-06 7.28431L1.98682e-06 0ZM2.66667 2.66667L2.66667 5.46668C5.03986 6.67985 6.66667 9.14858 6.66667 12C6.66667 14.8514 5.03985 17.3201 2.66667 18.5333L2.66667 21.3333L26.6667 21.3333V18.5333C24.2935 17.3201 22.6667 14.8514 22.6667 12C22.6667 9.14858 24.2935 6.67985 26.6667 5.46668V2.66667H2.66667Z" fill="#FF0037"></path>
          </svg>`,
        },
      },
    ],
  },
  actionCardIcon: {
    value: `<svg width="54" height="62" viewBox="0 0 54 62" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M27 0.333984L36.3333 7.00065L27 13.6673V9.66732H21.6666C12.83 9.66732 5.66659 16.8308 5.66659 25.6673V36.334C5.66659 43.1842 9.97146 49.0289 16.0235 51.3104L11.9849 55.349C5.06911 51.8207 0.333252 44.6304 0.333252 36.334V25.6673C0.333252 13.8852 9.88451 4.33398 21.6666 4.33398H27V0.333984Z" fill="#FF0037"></path>
    <path d="M42.8809 7.11967L38.9192 11.0813C44.4706 13.5919 48.3333 19.1785 48.3333 25.6673V36.334C48.3333 45.1705 41.1698 52.334 32.3333 52.334H26.9999V48.334L17.6666 55.0007L26.9999 61.6673V57.6673H32.3333C44.1153 57.6673 53.6666 48.1161 53.6666 36.334V25.6673C53.6666 17.7219 49.323 10.7911 42.8809 7.11967Z" fill="#FF0037"></path>
    <path d="M25.1656 17.668V21.501H19.8332C17.2559 21.501 15.1666 23.5903 15.1666 26.1677V28.3341C15.1666 30.9115 17.2559 33.0008 19.8332 33.0008H32.8328C33.201 33.0008 33.4995 33.2993 33.4995 33.6675V35.834C33.4995 36.2021 33.201 36.5006 32.8328 36.5006H16.3333V40.5006H25.1656V44.3342H29.1656V40.5006H32.8328C35.4101 40.5006 37.4995 38.4113 37.4995 35.834V33.6675C37.4995 31.0901 35.4101 29.0008 32.8328 29.0008H19.8332C19.465 29.0008 19.1666 28.7023 19.1666 28.3341V26.1677C19.1666 25.7995 19.465 25.501 19.8332 25.501H36.3328V21.501H29.1656V17.668H25.1656Z" fill="#FF0037"></path>
    </svg>`,
  },
  actionCardTitle: {
    value: 'Auto Pay',
  },
  actionCardDescription: {
    value: 'Save $5 monthly on your bill.',
  },
  actionCardButtonText: {
    value: `SIGN UP NOW`,
  },
  actionCardButtonUrl: {
    url: '/login',
  },
  actionCardBackgroundColor: {
    value: '#EAFFFD',
  },
}

export const supportArticles = {
  title: { value: 'Support articles' },
  subtext: {
    value:
      'Get the help you need with step-by-step solutions to your questions.',
  },
  cards: {
    list: [
      {
        title: { value: 'Billing' },
        subtitle: { value: 'How to pay your bill' },
        href: { url: '/' },
        type: { value: 'link' },
      },
      {
        title: { value: 'Internet' },
        subtitle: { value: 'Change My Password or FrontierID' },
        href: { url: '/' },
        type: { value: 'link' },
      },
      {
        title: { value: 'Internet' },
        subtitle: { value: 'Restart my router' },
        href: { url: '/' },
        type: { value: 'link' },
      },
      {
        title: { value: 'Billing' },
        subtitle: { value: 'Choose paperless billing' },
        href: { url: '/' },
        type: { value: 'link' },
      },
      {
        title: { value: 'Account' },
        subtitle: { value: 'How to make account changes' },
        href: { url: '/' },
        type: { value: 'link' },
      },
      {
        title: { value: 'Account' },
        subtitle: { value: 'How to make changes to my services' },
        href: { url: '/' },
        type: { value: 'link' },
      },
      {
        title: { value: 'Billing' },
        subtitle: { value: 'How to pay your bill' },
        href: { url: '/' },
        type: { value: 'link' },
      },
      {
        title: { value: '' },
        subtitle: { value: `Didn't find what you were looking for?` },
        href: { url: '/search' },
        type: { value: 'search' },
      },
    ],
  },
  maxCap: {
    value: 30,
  },
  showMoreButtonText: {
    value: 'Show More',
  },
  showLessButtonText: {
    value: 'Show Less',
  },
}

export const findWhatYouNeed = {
  title: {
    value: `Didn't find what you need?`,
  },
  buttonText: {
    value: `Contact US`,
  },
  buttonUrl: {
    url: '',
  },
}

export const blogArticles = {
  title: {
    value: 'Blogs',
  },
  description: {
    value: 'Learn about the latest in tech, entertainment, gaming and more.',
  },
  blogs: {
    list: [
      {
        title: {
          value:
            'Now that you have 2 Gig speed, how do you get the most out of it?',
        },
        description: {
          value:
            '2 Gig internet is so fast, you can’t just plug a cable into your router and expect to get the best speeds just plug a cable into your router and expect to get the best speeds ',
        },
        href: {
          url: '/',
        },
        readNowText: {
          value: 'Read Now',
        },
        blogImage: {
          src: 'https://vsgstoqarg-539670-cdn-endpoint.azureedge.net/-/jssmedia/Project/Frontier/Dotcom/Images/fiber-2-gigabit-internet/when-all.jpg?rev=bda31478ea3c4276b2c34f188902e7c9',
        },
      },
      {
        title: {
          value:
            'Now that you have 2 Gig speed, how do you get the most out of it?',
        },
        description: {
          value:
            '2 Gig internet is so fast, you can’t just plug a cable into your router and expect to get the best speeds just plug a cable into your router and expect to get the best speeds ',
        },
        href: {
          url: '/',
        },
        readNowText: {
          value: 'Read Now',
        },
        blogImage: {
          src: 'https://vsgstoqarg-539670-cdn-endpoint.azureedge.net/-/jssmedia/Project/Frontier/Dotcom/Images/fiber-2-gigabit-internet/when-all.jpg?rev=bda31478ea3c4276b2c34f188902e7c9',
        },
      },
      {
        title: {
          value:
            'Now that you have 2 Gig speed, how do you get the most out of it?',
        },
        description: {
          value:
            '2 Gig internet is so fast, you can’t just plug a cable into your router and expect to get the best speeds just plug a cable into your router and expect to get the best speeds ',
        },
        href: {
          url: '/',
        },
        readNowText: {
          value: 'Read Now',
        },
        blogImage: {
          src: 'https://vsgstoqarg-539670-cdn-endpoint.azureedge.net/-/jssmedia/Project/Frontier/Dotcom/Images/fiber-2-gigabit-internet/when-all.jpg?rev=bda31478ea3c4276b2c34f188902e7c9',
        },
      },
    ],
  },
}

export const videos = {
  title: {
    value: 'Videos',
  },
  description: {
    value: 'Get answers to your questions through our series of short videos.',
  },
  showMoreText: {
    value: 'Show More',
  },
  showLessText: {
    value: 'Show Less',
  },
  maxCap: {
    value: 30,
  },
  list: [
    {
      title: {
        value: 'BILLING',
      },
      description: {
        value: 'How to pay my Frontier bill',
      },
      videoId: {
        value: '6305884524112',
      },
      thumbnail: {
        src: 'https://vsgstoqarg-539670-cdn-endpoint.azureedge.net/-/jssmedia/Project/Frontier/Dotcom/Images/fiber-2-gigabit-internet/when-all.jpg?rev=bda31478ea3c4276b2c34f188902e7c9',
      },
    },
    {
      title: {
        value: 'BILLING',
      },
      description: {
        value: 'How to pay my Frontier bill',
      },
      videoId: {
        value: '6305884524112',
      },
      thumbnail: {
        src: 'https://vsgstoqarg-539670-cdn-endpoint.azureedge.net/-/jssmedia/Project/Frontier/Dotcom/Images/fiber-2-gigabit-internet/when-all.jpg?rev=bda31478ea3c4276b2c34f188902e7c9',
      },
    },
    {
      title: {
        value: 'BILLING',
      },
      description: {
        value: 'How to pay my Frontier bill',
      },
      videoId: {
        value: '6305884524112',
      },
      thumbnail: {
        src: 'https://vsgstoqarg-539670-cdn-endpoint.azureedge.net/-/jssmedia/Project/Frontier/Dotcom/Images/fiber-2-gigabit-internet/when-all.jpg?rev=bda31478ea3c4276b2c34f188902e7c9',
      },
    },
  ],
}
