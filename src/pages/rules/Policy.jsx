import {
  Background,
  Bold,
  Date,
  LayoutContainer,
  Paragraph,
  ParagraphBold,
  ParagraphEmail,
  ParagraphHyperLink,
  Title,
  Version,
} from '../../styles/js/rule'

const Policy = () => {
  return (
    <Background>
      <LayoutContainer>
        <Title>CHÍNH SÁCH BẢO MẬT</Title>
        <Version>Phiên bản 1.0</Version>
        <Date>Cập nhật lần cuối: 22 tháng 9 năm 2024</Date>

        <Bold>Điều 1: Thu thập thông tin cá nhân người dùng</Bold>
        <Paragraph>
          Chúng tôi có thể yêu cầu bạn cung cấp cho chúng tôi một số thông tin
          cụ thể bao gồm: địa chỉ email, họ tên, giới tính.
        </Paragraph>

        <Bold>Điều 2: Mục đích thu thập thông tin cá nhân người dùng</Bold>
        <Paragraph>
          Chúng tôi có thể sử dụng, tiết lộ, xử lí thông tin cá nhân của bạn cho
          một số mục đích sau:
        </Paragraph>
        <Paragraph>
          <ParagraphBold>1.</ParagraphBold> Nhận dạng, xác minh danh tính người
          dùng.
        </Paragraph>
        <Paragraph>
          <ParagraphBold>2.</ParagraphBold> Liên hệ, hỗ trợ, tư vấn về các dịch
          vụ của chúng tôi.
        </Paragraph>
        <Paragraph>
          <ParagraphBold>3.</ParagraphBold> Nghiên cứu, phân tích dữ liệu phục
          vụ cho việc phát triển dịch vụ của chúng tôi.
        </Paragraph>
        <Paragraph>
          <ParagraphBold>4.</ParagraphBold> Tiếp thị sản phẩm trong tương lai.
        </Paragraph>
        <Paragraph>
          <ParagraphBold>5.</ParagraphBold> Lưu trữ trên máy chủ, sao lưu.
        </Paragraph>
        <Paragraph>
          <ParagraphBold>6.</ParagraphBold> Gửi thông báo mà chúng tôi cho rằng
          cần thiết hoặc bạn sẽ quan tâm.
        </Paragraph>

        <Bold>Điều 3: Bảo mật thông tin cá nhân người dùng</Bold>
        <Paragraph>
          Chúng tôi sẽ cố gắng hết sức để bảo vệ dữ liệu của bạn. Hãy nhớ rằng
          không có phương pháp nào 100% có thể giúp dữ liệu của bạn hoàn toàn
          bảo mật khi dữ liệu được truyền qua Internet hoặc lưu trữ điện tử.
        </Paragraph>

        <Bold>Điều 4: Sử dụng và xử lý Cookies</Bold>
        <Paragraph>
          <ParagraphBold>1.</ParagraphBold> Chúng tôi có thể sử dụng Cookies để
          người dùng không phải nhập thông tin đăng nhập của mình cho mỗi lần
          vào nền tảng.
        </Paragraph>
        <Paragraph>
          <ParagraphBold>2.</ParagraphBold> Cookies sẽ hết hạn sau một khoảng
          thời gian nhất định. Sau đó, để sử dụng tiếp dịch vụ, chúng tôi có thể
          yêu cầu bạn nhập lại thông tin đăng nhập của mình.
        </Paragraph>

        <Bold>Điều 5: Thay đổi chính sách bảo mật</Bold>
        <Paragraph>
          <ParagraphBold>1.</ParagraphBold> Chúng tôi có thể cập nhật chính sách
          bảo mật của mình theo thời gian. Chúng tôi sẽ thông báo cho bạn về bất
          kỳ thay đổi nào bằng cách đăng chính sách bảo mật mới trên trang này.
        </Paragraph>
        <Paragraph>
          <ParagraphBold>2.</ParagraphBold> Bạn nên xem chính sách bảo mật này
          định kỳ để biết bất kỳ thay đổi nào. Những thay đổi đối với chính sách
          bảo mật này có hiệu lực khi chúng được đăng trên trang này.
        </Paragraph>

        <Bold>Điều 6: Thông tin liên hệ</Bold>
        <Paragraph>
          Nếu bạn có bất kỳ thắc mắc gì về chính sách bảo mật này, bạn có thể
          liên hệ với chúng tôi bằng cách:
        </Paragraph>
        <Paragraph>
          <ParagraphBold>1.</ParagraphBold> Nhắn tin trực tiếp tại fanpage:{' '}
          <ParagraphHyperLink
            href="https://www.facebook.com/vair.zone"
            target="blank"
          >
            VAir Zone
          </ParagraphHyperLink>
          .
        </Paragraph>
        <Paragraph>
          <ParagraphBold>2.</ParagraphBold> Gửi thư tới địa chỉ email:{' '}
          <ParagraphEmail>vair.zone@gmail.com</ParagraphEmail>.
        </Paragraph>
      </LayoutContainer>
    </Background>
  )
}

export default Policy
