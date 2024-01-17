import { useUniqueInlineId } from '@inline-svg-unique-id/react';

export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  
  const linearGradient1 = useUniqueInlineId();
  const linearGradient2 = useUniqueInlineId();
  const linearGradient3 = useUniqueInlineId();
  const linearGradient4 = useUniqueInlineId();
  const linearGradient5 = useUniqueInlineId();

  return (
    <svg
      width="100"
      height="27"
      viewBox="0 0 204 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M38.8966 48.0125H10.8911C10.4784 48.0125 10.0827 47.8486 9.79091 47.5568C9.49913 47.265 9.33521 46.8693 9.33521 46.4567V12.2277C9.33521 11.815 9.49913 11.4193 9.79091 11.1275C10.0827 10.8357 10.4784 10.6718 10.8911 10.6718H29.5614L40.4525 21.5629V46.4567C40.4525 46.8693 40.2885 47.265 39.9968 47.5568C39.705 47.8486 39.3092 48.0125 38.8966 48.0125Z"
        fill="url(#linearGradient1)"
        stroke="#01543A"
        strokeWidth="2.0531"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M29.5614 10.6718V21.5629H40.4524"
        fill="#006646"
        stroke="#006646"
        strokeWidth="2.0531"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <mask
        id="mask0_1535_30933"
        maskUnits="userSpaceOnUse"
        x="8"
        y="9"
        width="34"
        height="41"
      >
        <path
          d="M38.8966 48.0125H10.8911C10.4784 48.0125 10.0827 47.8486 9.79091 47.5568C9.49913 47.265 9.33521 46.8693 9.33521 46.4567V12.2277C9.33521 11.815 9.49913 11.4193 9.79091 11.1275C10.0827 10.8357 10.4784 10.6718 10.8911 10.6718H29.5614L40.4525 21.5629V46.4567C40.4525 46.8693 40.2885 47.265 39.9968 47.5568C39.705 47.8486 39.3092 48.0125 38.8966 48.0125Z"
          fill="url(#linearGradient2)"
          stroke="#01543A"
          strokeWidth="2.0531"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M29.5614 10.6718V21.5629H40.4524"
          fill="#006646"
          stroke="#006646"
          strokeWidth="2.0531"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </mask>
      <g mask="url(#mask0_1535_30933)">
        <path
          d="M42.6018 44.1416H17.6224L42.6018 48.7611V44.1416Z"
          fill="#023E2B"
        />
      </g>
      <path
        d="M47.1089 43.5642H19.1034C18.6908 43.5642 18.295 43.4002 18.0032 43.1085C17.7115 42.8167 17.5475 42.4209 17.5475 42.0083V7.77931C17.5475 7.36667 17.7115 6.97093 18.0032 6.67915C18.295 6.38737 18.6908 6.22345 19.1034 6.22345H37.7738L48.6648 17.1145V42.0083C48.6648 42.4209 48.5009 42.8167 48.2091 43.1085C47.9173 43.4002 47.5216 43.5642 47.1089 43.5642Z"
        fill="url(#linearGradient3)"
        stroke="#057A55"
        strokeWidth="2.0531"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M37.7738 6.22345V17.1145H48.6648"
        fill="url(#linearGradient4)"
        stroke="url(#linearGradient5)"
        strokeWidth="2.0531"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32.2793 33.3398C31.8691 33.3398 31.6641 33.1348 31.6641 32.7246V31.7773C31.6641 31.3672 31.8691 31.1621 32.2793 31.1621H39.584C39.9941 31.1621 40.1992 31.3672 40.1992 31.7773V32.7246C40.1992 33.1348 39.9941 33.3398 39.584 33.3398H32.2793Z"
        fill="white"
      />
      <path
        d="M25.9629 30.457V30.4668C25.748 30.5514 25.5723 30.5514 25.4355 30.4668C25.2988 30.3822 25.2305 30.2161 25.2305 29.9688V28.5918C25.2305 28.2598 25.3965 28.0254 25.7285 27.8887L30.25 26.0918V25.9258L25.7285 24.1484C25.3965 24.0638 25.2305 23.8327 25.2305 23.4551V22.0684C25.2305 21.8405 25.2988 21.6842 25.4355 21.5996C25.5723 21.515 25.748 21.515 25.9629 21.5996L32.5156 24.6172C32.8151 24.7409 32.9714 24.9818 32.9844 25.3398V26.7363C32.9844 27.0684 32.8281 27.3092 32.5156 27.459L25.9629 30.457Z"
        fill="white"
      />
      <path
        d="M73.496 15.808V26.56H73.56C73.6667 26.2613 73.848 25.9627 74.104 25.664C74.36 25.3653 74.6694 25.0987 75.032 24.864C75.3947 24.6293 75.8214 24.4373 76.312 24.288C76.8027 24.1387 77.336 24.064 77.912 24.064C79.128 24.064 80.1094 24.256 80.856 24.64C81.6027 25.0027 82.1787 25.5147 82.584 26.176C83.0107 26.8373 83.2987 27.616 83.448 28.512C83.5974 29.408 83.672 30.3787 83.672 31.424V40H78.872V32.384C78.872 31.936 78.8507 31.4773 78.808 31.008C78.7867 30.5173 78.6907 30.0693 78.52 29.664C78.3707 29.2587 78.1254 28.928 77.784 28.672C77.464 28.416 76.9947 28.288 76.376 28.288C75.7574 28.288 75.256 28.4053 74.872 28.64C74.488 28.8533 74.1894 29.152 73.976 29.536C73.784 29.8987 73.656 30.3147 73.592 30.784C73.528 31.2533 73.496 31.744 73.496 32.256V40H68.696V15.808H73.496Z"
        fill="#057A55"
      />
      <path
        d="M97.663 28.288H93.439V33.472C93.439 33.8987 93.4604 34.2933 93.503 34.656C93.5457 34.9973 93.6417 35.296 93.791 35.552C93.9404 35.808 94.1644 36.0107 94.463 36.16C94.783 36.288 95.199 36.352 95.711 36.352C95.967 36.352 96.2977 36.3307 96.703 36.288C97.1297 36.224 97.4497 36.096 97.663 35.904V39.904C97.1297 40.096 96.575 40.224 95.999 40.288C95.423 40.352 94.8577 40.384 94.303 40.384C93.4924 40.384 92.7457 40.2987 92.063 40.128C91.3804 39.9573 90.783 39.6907 90.271 39.328C89.759 38.944 89.3537 38.4533 89.055 37.856C88.7777 37.2587 88.639 36.5333 88.639 35.68V28.288H85.567V24.448H88.639V19.84H93.439V24.448H97.663V28.288Z"
        fill="#057A55"
      />
      <path
        d="M100.102 24.448H104.71V26.56H104.774C104.924 26.2613 105.137 25.9627 105.414 25.664C105.692 25.3653 106.022 25.0987 106.406 24.864C106.79 24.6293 107.228 24.4373 107.718 24.288C108.209 24.1387 108.742 24.064 109.318 24.064C110.406 24.064 111.366 24.288 112.198 24.736C113.052 25.184 113.692 25.888 114.118 26.848C114.673 25.8453 115.345 25.1307 116.134 24.704C116.924 24.2773 117.894 24.064 119.046 24.064C120.092 24.064 120.966 24.2453 121.67 24.608C122.396 24.9493 122.961 25.4293 123.366 26.048C123.793 26.6453 124.092 27.36 124.262 28.192C124.454 29.0027 124.55 29.8773 124.55 30.816V40H119.75V30.944C119.75 30.2187 119.59 29.6 119.27 29.088C118.972 28.5547 118.428 28.288 117.638 28.288C117.084 28.288 116.614 28.384 116.23 28.576C115.868 28.7467 115.569 28.992 115.334 29.312C115.121 29.632 114.961 30.0053 114.854 30.432C114.769 30.8587 114.726 31.3067 114.726 31.776V40H109.926V31.776C109.926 31.4987 109.916 31.1573 109.894 30.752C109.873 30.3467 109.798 29.9627 109.67 29.6C109.542 29.2373 109.329 28.928 109.03 28.672C108.753 28.416 108.337 28.288 107.782 28.288C107.164 28.288 106.662 28.4053 106.278 28.64C105.894 28.8533 105.596 29.152 105.382 29.536C105.19 29.8987 105.062 30.3147 104.998 30.784C104.934 31.2533 104.902 31.744 104.902 32.256V40H100.102V24.448Z"
        fill="#057A55"
      />
      <path d="M128.01 15.808H132.81V40H128.01V15.808Z" fill="#057A55" />
      <path
        d="M152.579 40H148.163V37.952H148.099C147.907 38.2293 147.651 38.5173 147.331 38.816C147.032 39.0933 146.669 39.3493 146.243 39.584C145.837 39.8187 145.379 40.0107 144.867 40.16C144.376 40.3093 143.864 40.384 143.331 40.384C142.179 40.384 141.133 40.192 140.195 39.808C139.256 39.4027 138.445 38.848 137.763 38.144C137.101 37.4187 136.589 36.5653 136.227 35.584C135.864 34.6027 135.683 33.5253 135.683 32.352C135.683 31.264 135.843 30.2293 136.163 29.248C136.504 28.2453 136.973 27.36 137.571 26.592C138.189 25.824 138.936 25.216 139.811 24.768C140.685 24.2987 141.677 24.064 142.787 24.064C143.789 24.064 144.717 24.224 145.571 24.544C146.445 24.8427 147.16 25.3653 147.715 26.112H147.779V15.808H152.579V40ZM148.163 32.224C148.163 31.0507 147.821 30.1013 147.139 29.376C146.477 28.6507 145.539 28.288 144.323 28.288C143.107 28.288 142.157 28.6507 141.475 29.376C140.813 30.1013 140.483 31.0507 140.483 32.224C140.483 33.3973 140.813 34.3467 141.475 35.072C142.157 35.7973 143.107 36.16 144.323 36.16C145.539 36.16 146.477 35.7973 147.139 35.072C147.821 34.3467 148.163 33.3973 148.163 32.224Z"
        fill="#057A55"
      />
      <path
        d="M155.839 32.224C155.839 30.9867 156.063 29.8667 156.511 28.864C156.959 27.8613 157.567 27.008 158.335 26.304C159.124 25.5787 160.041 25.024 161.087 24.64C162.153 24.256 163.284 24.064 164.479 24.064C165.673 24.064 166.793 24.256 167.839 24.64C168.905 25.024 169.823 25.5787 170.591 26.304C171.38 27.008 171.999 27.8613 172.447 28.864C172.895 29.8667 173.119 30.9867 173.119 32.224C173.119 33.4613 172.895 34.5813 172.447 35.584C171.999 36.5867 171.38 37.4507 170.591 38.176C169.823 38.88 168.905 39.424 167.839 39.808C166.793 40.192 165.673 40.384 164.479 40.384C163.284 40.384 162.153 40.192 161.087 39.808C160.041 39.424 159.124 38.88 158.335 38.176C157.567 37.4507 156.959 36.5867 156.511 35.584C156.063 34.5813 155.839 33.4613 155.839 32.224ZM160.639 32.224C160.639 33.3973 160.969 34.3467 161.631 35.072C162.313 35.7973 163.263 36.16 164.479 36.16C165.695 36.16 166.633 35.7973 167.295 35.072C167.977 34.3467 168.319 33.3973 168.319 32.224C168.319 31.0507 167.977 30.1013 167.295 29.376C166.633 28.6507 165.695 28.288 164.479 28.288C163.263 28.288 162.313 28.6507 161.631 29.376C160.969 30.1013 160.639 31.0507 160.639 32.224Z"
        fill="#057A55"
      />
      <path
        d="M186.474 29.472C186.239 29.1307 185.909 28.8533 185.482 28.64C185.055 28.4053 184.597 28.288 184.106 28.288C182.89 28.288 181.941 28.6507 181.258 29.376C180.597 30.1013 180.266 31.0507 180.266 32.224C180.266 33.3973 180.597 34.3467 181.258 35.072C181.941 35.7973 182.89 36.16 184.106 36.16C184.639 36.16 185.098 36.0427 185.482 35.808C185.866 35.5733 186.197 35.296 186.474 34.976L189.642 38.304C188.895 39.072 188.01 39.616 186.986 39.936C185.983 40.2347 185.023 40.384 184.106 40.384C182.911 40.384 181.781 40.192 180.714 39.808C179.669 39.424 178.751 38.88 177.962 38.176C177.194 37.4507 176.586 36.5867 176.138 35.584C175.69 34.5813 175.466 33.4613 175.466 32.224C175.466 30.9867 175.69 29.8667 176.138 28.864C176.586 27.8613 177.194 27.008 177.962 26.304C178.751 25.5787 179.669 25.024 180.714 24.64C181.781 24.256 182.911 24.064 184.106 24.064C185.023 24.064 185.983 24.224 186.986 24.544C188.01 24.8427 188.895 25.376 189.642 26.144L186.474 29.472Z"
        fill="#057A55"
      />
      <path
        d="M200.184 29.024C199.48 28.1493 198.552 27.712 197.4 27.712C196.994 27.712 196.6 27.808 196.216 28C195.832 28.192 195.64 28.5227 195.64 28.992C195.64 29.376 195.832 29.664 196.216 29.856C196.621 30.0267 197.122 30.1867 197.72 30.336C198.338 30.464 198.989 30.6133 199.672 30.784C200.376 30.9333 201.026 31.1787 201.624 31.52C202.242 31.8613 202.744 32.3307 203.128 32.928C203.533 33.504 203.736 34.2827 203.736 35.264C203.736 36.2667 203.512 37.0987 203.064 37.76C202.637 38.4 202.082 38.9227 201.4 39.328C200.717 39.712 199.949 39.9787 199.096 40.128C198.242 40.2987 197.4 40.384 196.568 40.384C195.48 40.384 194.381 40.2347 193.272 39.936C192.162 39.616 191.224 39.0613 190.456 38.272L193.368 35.04C193.816 35.5947 194.306 36.0213 194.84 36.32C195.394 36.5973 196.034 36.736 196.76 36.736C197.314 36.736 197.816 36.6613 198.264 36.512C198.712 36.3413 198.936 36.0427 198.936 35.616C198.936 35.2107 198.733 34.912 198.328 34.72C197.944 34.5067 197.442 34.336 196.824 34.208C196.226 34.0587 195.576 33.9093 194.872 33.76C194.189 33.5893 193.538 33.344 192.92 33.024C192.322 32.704 191.821 32.256 191.416 31.68C191.032 31.0827 190.84 30.2933 190.84 29.312C190.84 28.3947 191.021 27.6053 191.384 26.944C191.768 26.2827 192.258 25.7387 192.856 25.312C193.474 24.8853 194.178 24.576 194.968 24.384C195.757 24.1707 196.557 24.064 197.368 24.064C198.392 24.064 199.426 24.2133 200.472 24.512C201.517 24.8107 202.402 25.344 203.128 26.112L200.184 29.024Z"
        fill="#057A55"
      />
      <defs>
        <linearGradient
          id="linearGradient1"
          x1="35.5"
          y1="45.5"
          x2="11"
          y2="12.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#01543A" />
          <stop offset="1" stopColor="#086548" />
        </linearGradient>
        <linearGradient
          id="linearGradient2"
          x1="12"
          y1="13"
          x2="24.8938"
          y2="48.0125"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DDFFF4" />
          <stop offset="1" stopColor="#01543A" />
        </linearGradient>
        <linearGradient
          id="linearGradient3"
          x1="45"
          y1="44"
          x2="23"
          y2="3.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#057A55" />
          <stop offset="1" stopColor="#1D9A72" />
        </linearGradient>
        <linearGradient
          id="linearGradient4"
          x1="38"
          y1="17"
          x2="45"
          y2="12.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#006646" />
          <stop offset="1" stopColor="#055C41" />
        </linearGradient>
        <linearGradient
          id="linearGradient5"
          x1="38"
          y1="17.5"
          x2="41.5"
          y2="9.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#006646" />
          <stop offset="1" stopColor="#006646" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}
