import {
  Background,
  LayoutContainer,
  Paragraph,
  Qr,
  Title,
} from '../styles/js/donate'
import qr from '../../public/images/qr.png'

const Donate = () => {
  return (
    <Background>
      <LayoutContainer>
        <Title>Ủng hộ</Title>
        <Paragraph>
          "Thời gian không chờ đợi ai cả! Nếu chúng ta không cùng nhau chung
          tay, VAir Zone sẽ khó có thể tiếp tục hoạt động. Mình tin rằng, với sự
          đóng góp nhỏ bé của mỗi người, chúng ta sẽ cùng nhau tạo nên một cộng
          đồng thật sự sôi động và hiệu quả."
        </Paragraph>
        <Qr src={qr} alt="qr" />
      </LayoutContainer>
    </Background>
  )
}

export default Donate
