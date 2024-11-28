import {
  FirstPage,
  LayoutContainer,
  Page,
  OtherPage,
  SpecialContainer,
  SpecialTitle,
  PageTitle,
  CardContainer,
  Card,
  CardIconContainer,
  CardIcon,
  CardTitle,
  CardDescription,
  AuthorContainer,
  AuthorAvatar,
  AuthorName,
  AuthorClass,
  Contribute,
  ContributeLink,
  IntroContainer,
  Intro,
} from '../styles/js/landing.js'
import Weather from '../externals/rain-effect/Weather.jsx'
import authorImg from '../../public/images/author.png'
import ThemeBg from '../../public/images/themeBg.png'
import ThemeFg from '../../public/images/themeFg.png'

const Landing = () => {
  const personIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <path d="M15.772 15.4145C17.8896 15.4145 19.7233 14.6549 21.2216 13.1564C22.7199 11.6581 23.4794 9.8249 23.4794 7.70703C23.4794 5.58979 22.7199 3.75636 21.2214 2.25755C19.7228 0.759497 17.8893 0 15.772 0C13.654 0 11.8207 0.759497 10.3225 2.2578C8.82423 3.75611 8.06442 5.5896 8.06442 7.70703C8.06442 9.8249 8.82417 11.6584 10.3227 13.1567C11.8213 14.6548 13.6548 15.4145 15.772 15.4145ZM29.258 24.6063C29.2147 23.9828 29.1273 23.3026 28.9987 22.5844C28.8688 21.8607 28.7016 21.1767 28.5013 20.5514C28.2946 19.9052 28.0133 19.267 27.6657 18.6554C27.3048 18.0207 26.881 17.4679 26.4054 17.0131C25.9081 16.5373 25.2992 16.1547 24.5951 15.8756C23.8935 15.5981 23.1159 15.4575 22.2841 15.4575C21.9574 15.4575 21.6416 15.5915 21.0314 15.9887C20.5977 16.2712 20.1628 16.5516 19.7265 16.83C19.3073 17.0971 18.7394 17.3474 18.038 17.5739C17.3537 17.7954 16.6589 17.9077 15.9731 17.9077C15.2873 17.9077 14.5927 17.7954 13.9076 17.5739C13.207 17.3476 12.6392 17.0974 12.2204 16.8302C11.7348 16.5199 11.2954 16.2367 10.9143 15.9884C10.3049 15.5913 9.98873 15.4572 9.6621 15.4572C8.83004 15.4572 8.05273 15.5981 7.3513 15.8759C6.64768 16.1545 6.03856 16.5371 5.54074 17.0134C5.06543 17.4684 4.64137 18.0209 4.281 18.6554C3.93363 19.267 3.65238 19.9049 3.44532 20.5517C3.24532 21.1769 3.07813 21.8607 2.94825 22.5844C2.81957 23.3017 2.73219 23.9821 2.68894 24.6071C2.64592 25.236 2.62459 25.8663 2.62501 26.4967C2.62501 28.1671 3.156 29.5194 4.20312 30.5167C5.23731 31.5009 6.60568 32.0001 8.26973 32.0001H23.6779C25.342 32.0001 26.7099 31.5011 27.7443 30.5168C28.7917 29.5201 29.3227 28.1676 29.3227 26.4965C29.3224 25.8517 29.3007 25.2157 29.258 24.6063Z" />
    </svg>
  )

  const boardIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <path d="M29.1765 0.941162H2.82352C1.78822 0.941162 0.941162 1.78822 0.941162 2.82352V21.6282C0.941162 22.6635 1.78822 23.5106 2.82352 23.5106H8.63999L5.43999 28.1035C4.83763 28.9506 5.06352 30.1365 5.91057 30.72C6.23057 30.9459 6.60704 31.0588 6.98352 31.0588C7.58587 31.0588 8.1694 30.7765 8.52704 30.2494L13.2141 23.5106H18.7859L23.4729 30.2494C23.8306 30.7765 24.4141 31.0588 25.0165 31.0588C25.3604 31.0596 25.6979 30.9659 25.9923 30.788C26.2866 30.6101 26.5265 30.3548 26.6857 30.0499C26.8449 29.7451 26.9174 29.4023 26.8953 29.0591C26.8731 28.7159 26.7571 28.3854 26.56 28.1035L23.36 23.5106H29.1765C30.2118 23.5106 31.0588 22.6635 31.0588 21.6282V2.82352C31.0588 1.78822 30.2118 0.941162 29.1765 0.941162Z" />
    </svg>
  )

  return (
    <>
      <FirstPage>
        <Weather foreground={ThemeFg} background={ThemeBg} />
        <SpecialContainer>
          <SpecialTitle>VAir Zone</SpecialTitle>
        </SpecialContainer>
      </FirstPage>

      <OtherPage>
        <LayoutContainer>
          <Page>
            <PageTitle>Giới thiệu</PageTitle>
            <IntroContainer>
              <Intro>
                “VAir Zone - Nơi kết nối những trái tim trẻ. Bạn không đơn độc
                trên hành trình chinh phục bầu trời. Với VAir Zone, bạn sẽ tìm
                thấy một cộng đồng sôi động, nơi bạn có thể tìm kiếm bạn bè cùng
                sở thích, tham gia các hoạt động ngoại khóa, và cùng nhau xây
                dựng những kỷ niệm đẹp."
              </Intro>
              <Intro>
                "VAir Zone - Đôi cánh nâng bước bạn bay cao. Chúng tôi tạo ra
                một sân chơi chung để bạn thể hiện bản thân, khám phá những khả
                năng tiềm ẩn, và xây dựng một mạng lưới quan hệ vững chắc cho
                tương lai."
              </Intro>
            </IntroContainer>
          </Page>

          <Page>
            <PageTitle>Tính năng nổi bật</PageTitle>
            <CardContainer>
              <Card>
                <CardIconContainer>
                  <CardIcon>{personIcon}</CardIcon>
                </CardIconContainer>
                <CardTitle>Trang cá nhân</CardTitle>
                <CardDescription>
                  Bạn đã bao giờ muốn thoát khỏi mọi giới hạn và khám phá một
                  thế giới hoàn toàn mới, nơi bạn có thể là chính mình?
                </CardDescription>
              </Card>
              <Card>
                <CardIconContainer>
                  <CardIcon>{boardIcon}</CardIcon>
                </CardIconContainer>
                <CardTitle>Bảng hoạt động</CardTitle>
                <CardDescription>
                  Đừng bỏ lỡ bất kỳ cơ hội nào để tăng ngày rèn luyện (NRL)!
                  Chúng tôi sẽ cập nhật liên tục những hoạt động mới nhất từ các
                  đoàn, hội, khoa, câu lạc bộ.
                </CardDescription>
              </Card>
            </CardContainer>
          </Page>

          <Page>
            <PageTitle>Tác giả</PageTitle>
            <AuthorContainer>
              <AuthorAvatar src={authorImg} alt="author" />
              <AuthorName>Nguyễn Minh Nhựt</AuthorName>
              <AuthorClass>23ĐHTT02</AuthorClass>
            </AuthorContainer>
          </Page>

          <Page>
            <PageTitle>Đóng góp</PageTitle>
            <Contribute>
              Hiện tại dự án vẫn còn đang trong quá trình phát triển. Nếu bạn có
              bất kì đóng góp nào, xin hãy điền chi tiết vào{' '}
              <ContributeLink
                href="https://docs.google.com/forms/d/e/1FAIpQLSeApzwnIXYR4mevveDbAqRRBnxML7kyh__1IZejxfjOLsPheQ/viewform"
                target="blank"
              >
                đây
              </ContributeLink>
              . Mọi đóng góp của bạn chính là động lực của chúng tôi!
            </Contribute>
          </Page>
        </LayoutContainer>
      </OtherPage>
    </>
  )
}

export default Landing
