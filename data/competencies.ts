export interface CompetencyIndicator {
  code: string;
  description: string;
  level?: string; // e.g., "Tiểu học", "THCS", "THPT"
}

export interface CompetencyComponent {
  code: string;
  name: string;
  description?: string;
  indicators?: CompetencyIndicator[];
}

export interface CompetencyDomain {
  id: number;
  name: string;
  components: CompetencyComponent[];
}

export const COMPETENCY_FRAMEWORK: CompetencyDomain[] = [
  {
    id: 1,
    name: "I. Khai thác dữ liệu và thông tin",
    components: [
      {
        code: "1.1",
        name: "Duyệt, tìm kiếm và lọc dữ liệu, thông tin và nội dung số",
        indicators: [
          { code: "1.1.CB1a", description: "Xác định được nhu cầu thông tin, tìm kiếm dữ liệu, thông tin và nội dung thông qua tìm kiếm đơn giản trong môi trường số.", level: "Cơ bản 1" },
          { code: "1.1.CB1b", description: "Tìm được cách truy cập những dữ liệu, thông tin và nội dung này cũng như điều hướng giữa chúng.", level: "Cơ bản 1" },
          { code: "1.1.CB1c", description: "Xác định được các chiến lược tìm kiếm đơn giản.", level: "Cơ bản 1" },
          { code: "1.1.CB2a", description: "Xác định được nhu cầu thông tin.", level: "Cơ bản 2" },
          { code: "1.1.CB2b", description: "Tìm được dữ liệu, thông tin và nội dung thông qua tìm kiếm đơn giản trong môi trường số.", level: "Cơ bản 2" },
          { code: "1.1.CB2c", description: "Tìm được cách truy cập những dữ liệu, thông tin và nội dung này cũng như điều hướng giữa chúng.", level: "Cơ bản 2" },
          { code: "1.1.CB2d", description: "Xác định được các chiến lược tìm kiếm đơn giản.", level: "Cơ bản 2" },
          { code: "1.1.TC1a", description: "Giải thích được nhu cầu thông tin.", level: "Trung cấp 1" },
          { code: "1.1.TC1b", description: "Thực hiện được rõ ràng và theo quy trình các tìm kiếm để tìm dữ liệu, thông tin và nội dung trong môi trường số.", level: "Trung cấp 1" },
          { code: "1.1.TC1c", description: "Giải thích được cách truy cập và điều hướng các kết quả tìm kiếm.", level: "Trung cấp 1" },
          { code: "1.1.TC1d", description: "Giải thích được rõ ràng và theo quy trình chiến lược tìm kiếm.", level: "Trung cấp 1" },
          { code: "1.1.TC2a", description: "Minh họa được nhu cầu thông tin.", level: "Trung cấp 2" },
          { code: "1.1.TC2b", description: "Tổ chức được tìm kiếm dữ liệu, thông tin và nội dung trong môi trường số.", level: "Trung cấp 2" },
          { code: "1.1.TC2c", description: "Mô tả được cách truy cập những dữ liệu, thông tin và nội dung này cũng như điều hướng giữa chúng.", level: "Trung cấp 2" },
          { code: "1.1.TC2d", description: "Tổ chức được các chiến lược tìm kiếm.", level: "Trung cấp 2" },
          { code: "1.1.NC1a", description: "Đáp ứng được nhu cầu thông tin.", level: "Nâng cao" },
          { code: "1.1.NC1b", description: "Áp dụng được kỹ thuật tìm kiếm để lấy được dữ liệu, thông tin và nội dung trong môi trường số.", level: "Nâng cao" },
          { code: "1.1.NC1c", description: "Chỉ cho người khác cách truy cập những dữ liệu, thông tin và nội dung này cũng như điều hướng giữa chúng.", level: "Nâng cao" },
          { code: "1.1.NC1d", description: "Tự đề xuất được chiến lược tìm kiếm.", level: "Nâng cao" }
        ]
      },
      {
        code: "1.2",
        name: "Đánh giá dữ liệu, thông tin và nội dung số",
        indicators: [
            { code: "1.2.CB1a", description: "Phát hiện được độ tin cậy và độ chính xác của các nguồn chung của dữ liệu, thông tin và nội dung số.", level: "Cơ bản 1"},
            { code: "1.2.CB2a", description: "Phát hiện được độ tin cậy và độ chính xác của các nguồn chung của dữ liệu, thông tin và nội dung số.", level: "Cơ bản 2"},
            { code: "1.2.TC1a", description: "Thực hiện phân tích, so sánh, đánh giá được độ tin cậy và độ chính xác của các nguồn dữ liệu, thông tin và nội dung số đã được tổ chức rõ ràng.", level: "Trung cấp 1"},
            { code: "1.2.TC1b", description: "Thực hiện phân tích, diễn giải và đánh giá được dữ liệu, thông tin và nội dung số được xác định rõ ràng.", level: "Trung cấp 1"},
            { code: "1.2.TC2a", description: "Thực hiện phân tích, so sánh và đánh giá được các nguồn dữ liệu, thông tin và nội dung số.", level: "Trung cấp 2"},
            { code: "1.2.TC2b", description: "Thực hiện phân tích, diễn giải và đánh giá được dữ liệu, thông tin và nội dung số.", level: "Trung cấp 2"},
            { code: "1.2.NC1a", description: "Thực hiện đánh giá được độ tin cậy và độ tin cậy của các nguồn dữ liệu, thông tin và nội dung số.", level: "Nâng cao"},
            { code: "1.2.NC1b", description: "Tiến hành đánh giá được các dữ liệu, thông tin và nội dung số khác nhau.", level: "Nâng cao"}
        ]
      },
      { 
        code: "1.3", 
        name: "Quản lý dữ liệu, thông tin và nội dung số",
        indicators: [
            { code: "1.3.CB1a", description: "Xác định được cách tổ chức, lưu trữ và truy xuất dữ liệu, thông tin và nội dung một cách đơn giản trong môi trường số.", level: "Cơ bản 1"},
            { code: "1.3.CB1b", description: "Nhận biết được nơi để sắp xếp dữ liệu, thông tin và nội dung một cách đơn giản trong môi trường có cấu trúc.", level: "Cơ bản 1"},
            { code: "1.3.CB2a", description: "Xác định được cách tổ chức, lưu trữ và truy xuất dữ liệu, thông tin và nội dung một cách đơn giản trong môi trường số.", level: "Cơ bản 2"},
            { code: "1.3.CB2b", description: "Nhận biết được nơi để sắp xếp dữ liệu, thông tin và nội dung một cách đơn giản trong môi trường có cấu trúc.", level: "Cơ bản 2"},
            { code: "1.3.TC1a", description: "Lựa chọn được dữ liệu, thông tin và nội dung để tổ chức, lưu trữ và truy xuất chúng một cách thường xuyên trong môi trường số.", level: "Trung cấp 1"},
            { code: "1.3.TC1b", description: "Sắp xếp chúng một cách trật tự trong một môi trường có cấu trúc.", level: "Trung cấp 1"},
            { code: "1.3.TC2a", description: "Sắp xếp được thông tin, dữ liệu, nội dung để dễ dàng lưu trữ và truy xuất.", level: "Trung cấp 2"},
            { code: "1.3.TC2b", description: "Tổ chức được thông tin, dữ liệu và nội dung trong một môi trường có cấu trúc.", level: "Trung cấp 2"},
            { code: "1.3.NC1a", description: "Thao tác được thông tin, dữ liệu và nội dung để tổ chức, lưu trữ và truy xuất dễ dàng hơn.", level: "Nâng cao"},
            { code: "1.3.NC1b", description: "Triển khai được việc tổ chức và sắp xếp dữ liệu, thông tin và nội dung trong môi trường có cấu trúc.", level: "Nâng cao"}
        ]
      }
    ]
  },
  {
    id: 2,
    name: "II. Giao tiếp và hợp tác trong môi trường số",
    components: [
      { code: "2.1", name: "Tương tác thông qua công nghệ số", indicators: [
        { code: "2.1.CB1a", description: "Lựa chọn được các công nghệ số đơn giản để tương tác.", level: "Cơ bản 1"},
        { code: "2.1.CB1b", description: "Xác định được các phương tiện giao tiếp đơn giản thích hợp cho một bối cảnh cụ thể.", level: "Cơ bản 1"},
        { code: "2.1.CB2a", description: "Lựa chọn được các công nghệ số đơn giản để tương tác.", level: "Cơ bản 2"},
        { code: "2.1.CB2b", description: "Xác định được các phương tiện giao tiếp đơn giản thích hợp cho một bối cảnh cụ thể.", level: "Cơ bản 2"},
        { code: "2.1.TC1a", description: "Thực hiện được các tương tác được xác định rõ ràng và thường xuyên với các công nghệ số.", level: "Trung cấp 1"},
        { code: "2.1.TC1b", description: "Lựa chọn được các phương tiện giao tiếp số phù hợp, được xác định rõ ràng cho phù hợp với bối cảnh nhất định.", level: "Trung cấp 1"},
        { code: "2.1.TC2a", description: "Lựa chọn được nhiều công nghệ số để tương tác.", level: "Trung cấp 2"},
        { code: "2.1.TC2b", description: "Lựa chọn được nhiều phương tiện truyền thông số cho phù hợp với bối cảnh nhất định.", level: "Trung cấp 2"},
        { code: "2.1.NC1a", description: "Sử dụng được nhiều công nghệ số để tương tác.", level: "Nâng cao"},
        { code: "2.1.NC1b", description: "Cho người khác thấy phương tiện giao tiếp số phù hợp nhất cho một bối cảnh cụ thể.", level: "Nâng cao"}
      ] },
      { code: "2.2", name: "Chia sẻ thông tin và nội dung thông qua công nghệ số", indicators: [
        { code: "2.2.CB1a", description: "Nhận biết được các công nghệ số đơn giản, phù hợp để chia sẻ dữ liệu, thông tin và nội dung kỹ thuật số.", level: "Cơ bản 1"},
        { code: "2.2.CB1b", description: "Nhận biết được phương pháp trích dẫn và ghi nguồn cơ bản.", level: "Cơ bản 1"},
        { code: "2.2.CB2a", description: "Nhận biết được các công nghệ số đơn giản, phù hợp để chia sẻ dữ liệu, thông tin và nội dung kỹ thuật số.", level: "Cơ bản 2"},
        { code: "2.2.CB2b", description: "Xác định được phương pháp trích dẫn và ghi nguồn cơ bản.", level: "Cơ bản 2"},
        { code: "2.2.TC1a", description: "Lựa chọn các công nghệ số phù hợp được xác định rõ để trao đổi dữ liệu, thông tin và nội dung số.", level: "Trung cấp 1"},
        { code: "2.2.TC1b", description: "Giải thích cách thức hoạt động như một trung gian để chia sẻ thông tin và nội dung thông qua các công nghệ kỹ thuật số được xác định rõ ràng và thường xuyên.", level: "Trung cấp 1"},
        { code: "2.2.TC1c", description: "Minh họa rõ ràng và thường xuyên các phương pháp tham chiếu và ghi chú nguồn.", level: "Trung cấp 1"},
        { code: "2.2.TC2a", description: "Vận dụng được các công nghệ số phù hợp để chia sẻ dữ liệu, thông tin và nội dung số.", level: "Trung cấp 2"},
        { code: "2.2.TC2b", description: "Giải thích được cách đóng vai trò trung gian để chia sẻ thông tin và nội dung thông qua công nghệ số.", level: "Trung cấp 2"},
        { code: "2.2.TC2c", description: "Áp dụng được các phương pháp tham chiếu và ghi chú nguồn.", level: "Trung cấp 2"},
        { code: "2.2.NC1a", description: "Chia sẻ dữ liệu, thông tin và nội dung số thông qua nhiều công cụ số phù hợp.", level: "Nâng cao"},
        { code: "2.2.NC1b", description: "Hướng dẫn người khác cách đóng vai trò trung gian để chia sẻ thông tin và nội dung thông qua công nghệ số.", level: "Nâng cao"},
        { code: "2.2.NC1c", description: "Áp dụng được nhiều phương pháp tham chiếu và ghi nguồn khác nhau.", level: "Nâng cao"}
      ] },
      { code: "2.3", name: "Sử dụng công nghệ số để thực hiện trách nhiệm công dân", indicators: [
        { code: "2.3.CB1a", description: "Xác định được các dịch vụ số đơn giản để có thể tham gia vào xã hội.", level: "Cơ bản 1"},
        { code: "2.3.CB1b", description: "Nhận biết được các công nghệ số đơn giản, phù hợp để nâng cao năng lực cho bản thân và tham gia vào xã hội với tư cách là một công dân.", level: "Cơ bản 1"},
        { code: "2.3.CB2a", description: "Xác định được các dịch vụ số đơn giản để có thể tham gia vào xã hội.", level: "Cơ bản 2"},
        { code: "2.3.CB2b", description: "Nhận biết được các công nghệ số đơn giản, phù hợp để nâng cao năng lực cho bản thân và tham gia vào xã hội với tư cách là một công dân.", level: "Cơ bản 2"},
        { code: "2.3.TC1a", description: "Lựa chọn được các dịch vụ số được xác định rõ ràng và phổ biến để tham gia vào xã hội.", level: "Trung cấp 1"},
        { code: "2.3.TC1b", description: "Xác định được các công nghệ số rõ ràng và thích hợp để tự mình trang bị và tham gia vào xã hội như một công dân.", level: "Trung cấp 1"},
        { code: "2.3.TC2a", description: "Lựa chọn được các dịch vụ số để tham gia vào xã hội.", level: "Trung cấp 2"},
        { code: "2.3.TC2b", description: "Thảo luận về các công nghệ số phù hợp để nâng cao năng lực của bản thân và tham gia vào xã hội với tư cách là một công.", level: "Trung cấp 2"},
        { code: "2.3.NC1a", description: "Đề xuất được các dịch vụ số khác nhau để tham gia vào xã hội.", level: "Nâng cao"},
        { code: "2.3.NC1b", description: "Sử dụng được các công nghệ số thích hợp để tự mình trang bị và tham gia vào xã hội như một công dân.", level: "Nâng cao"}
      ] },
      { code: "2.4", name: "Hợp tác thông qua công nghệ số", indicators: [
        { code: "2.4.CB1a", description: "Chọn được những công cụ và công nghệ số đơn giản cho các quá trình cộng tác.", level: "Cơ bản 1"},
        { code: "2.4.CB2a", description: "Chọn được những công cụ và công nghệ số đơn giản cho các quá trình cộng tác.", level: "Cơ bản 2"},
        { code: "2.4.TC1a", description: "Lựa chọn được các công cụ và công nghệ số được xác định rõ ràng và thường xuyên cho các quá trình hợp tác.", level: "Trung cấp 1"},
        { code: "2.4.TC2a", description: "Lựa chọn được các công cụ và công nghệ số cho các quá trình hợp tác.", level: "Trung cấp 2"},
        { code: "2.4.NC1a", description: "Đề xuất được các công cụ và công nghệ số khác nhau cho các quá trình hợp tác.", level: "Nâng cao"}
      ] },
      { code: "2.5", name: "Thực hiện quy tắc ứng xử trên mạng (Netiquette)", indicators: [
        { code: "2.5.CB1a", description: "Phân biệt được các chuẩn mực hành vi đơn giản và biết cách sử dụng công nghệ số và tương tác trong môi trường số.", level: "Cơ bản 1"},
        { code: "2.5.CB1b", description: "Chọn được các phương thức và chiến lược giao tiếp đơn giản phù hợp trong môi trường số.", level: "Cơ bản 1"},
        { code: "2.5.CB1c", description: "Phân biệt các khía cạnh đơn giản của sự đa dạng về văn hóa và thế hệ cần được tính đến trong môi trường số.", level: "Cơ bản 1"},
        { code: "2.5.CB2a", description: "Phân biệt được các chuẩn mực hành vi đơn giản và bí quyết sử dụng công nghệ số và tương tác trong môi trường số.", level: "Cơ bản 2"},
        { code: "2.5.CB2b", description: "Chọn được các phương thức và chiến lược giao tiếp đơn giản phù hợp trong môi trường số.", level: "Cơ bản 2"},
        { code: "2.5.CB2c", description: "Phân biệt các khía cạnh đơn giản của sự đa dạng về văn hóa và thế hệ cần được tính đến trong môi trường số.", level: "Cơ bản 2"},
        { code: "2.5.TC1a", description: "Làm rõ được các chuẩn mực hành vi thường xuyên và được xác định rõ ràng cũng như bí quyết khi sử dụng công nghệ số và tương tác trong môi trường số.", level: "Trung cấp 1"},
        { code: "2.5.TC1b", description: "Thể hiện được các chiến lược giao tiếp thường xuyên và xác định rõ ràng phương thức giao tiếp phù hợp trong môi trường số.", level: "Trung cấp 1"},
        { code: "2.5.TC1c", description: "Mô tả các khía cạnh đa dạng về văn hóa và thế hệ được xác định rõ ràng và thông thường cần xem xét trong môi trường số.", level: "Trung cấp 1"},
        { code: "2.5.TC2a", description: "Thảo luận về các chuẩn mực hành vi và cách sử dụng công nghệ số và tương tác trong môi trường số.", level: "Trung cấp 2"},
        { code: "2.5.TC2b", description: "Thảo luận các chiến lược giao tiếp phù hợp trong môi trường số.", level: "Trung cấp 2"},
        { code: "2.5.TC2c", description: "Thảo luận các khía cạnh đa dạng về văn hóa và thế hệ cần xem xét trong môi trường số.", level: "Trung cấp 2"},
        { code: "2.5.NC1a", description: "Áp dụng được các chuẩn mực hành vi và bí quyết khác nhau khi sử dụng công nghệ số và tương tác trong môi trường số.", level: "Nâng cao"},
        { code: "2.5.NC1b", description: "Áp dụng được các chiến lược giao tiếp khác nhau trong môi trường số một cách phù hợp.", level: "Nâng cao"},
        { code: "2.5.NC1c", description: "Áp dụng được các khía cạnh đa dạng về văn hóa và thế hệ khác nhau để xem xét trong môi trường số.", level: "Nâng cao"}
      ] },
      { code: "2.6", name: "Quản lý danh tính số", indicators: [
        { code: "2.6.CB1a", description: "Xác định được danh tính số.", level: "Cơ bản 1"},
        { code: "2.6.CB1b", description: "Mô tả được những cách đơn giản để bảo vệ danh tiếng trực tuyến của bản thân.", level: "Cơ bản 1"},
        { code: "2.6.CB1c", description: "Nhận biết được dữ liệu đơn giản do mình tạo ra thông qua các công cụ, môi trường hoặc dịch vụ số.", level: "Cơ bản 1"},
        { code: "2.6.CB2a", description: "Xác định được danh tính số.", level: "Cơ bản 2"},
        { code: "2.6.CB2b", description: "Mô tả được những cách đơn giản để bảo vệ danh tiếng trực tuyến của bản thân.", level: "Cơ bản 2"},
        { code: "2.6.CB2c", description: "Nhận biết được dữ liệu đơn giản do mình tạo ra thông qua các công cụ, môi trường hoặc dịch vụ số.", level: "Cơ bản 2"},
        { code: "2.6.TC1a", description: "Phân biệt được một loạt các danh tính số thông thường và được xác định rõ ràng.", level: "Trung cấp 1"},
        { code: "2.6.TC1b", description: "Giải thích được những cách được xác định rõ ràng và thường xuyên để bảo vệ danh tiếng trực tuyến của bản thân.", level: "Trung cấp 1"},
        { code: "2.6.TC1c", description: "Mô tả dữ liệu được xác định rõ ràng mà bạn thường xuyên thu được thông qua các công cụ, môi trường hoặc dịch vụ số.", level: "Trung cấp 1"},
        { code: "2.6.TC2a", description: "Hiển thị được nhiều danh tính số cụ thể.", level: "Trung cấp 2"},
        { code: "2.6.TC2b", description: "Thảo luận những cách cụ thể để bảo vệ danh tiếng trực tuyến của bản thân.", level: "Trung cấp 2"},
        { code: "2.6.TC2c", description: "Thao tác dữ liệu cá nhân tạo ra thông qua các công cụ, môi trường hoặc dịch vụ số.", level: "Trung cấp 2"},
        { code: "2.6.NC1a", description: "Sử dụng được nhiều danh tính số khác nhau.", level: "Nâng cao"},
        { code: "2.6.NC1b", description: "Áp dụng được các cách khác nhau để bảo vệ danh tính trực tuyến của bản thân.", level: "Nâng cao"},
        { code: "2.6.NC1c", description: "Sử dụng được dữ liệu tạo ra thông qua công cụ, môi trường và một số dịch vụ số.", level: "Nâng cao"}
      ] }
    ]
  },
  {
    id: 3,
    name: "III. Sáng tạo nội dung số",
    components: [
      { code: "3.1", name: "Phát triển nội dung số", indicators: [
        { code: "3.1.CB1a", description: "Xác định được các cách tạo và chỉnh sửa nội dung đơn giản ở các định dạng đơn giản.", level: "Cơ bản 1"},
        { code: "3.1.CB1b", description: "Chọn được cách thể hiện bản thân thông qua việc tạo ra các nội dung số đơn giản.", level: "Cơ bản 1"},
        { code: "3.1.CB2a", description: "Xác định được các cách tạo và chỉnh sửa nội dung đơn giản ở các định dạng đơn giản.", level: "Cơ bản 2"},
        { code: "3.1.CB2b", description: "Chọn được cách thể hiện bản thân thông qua việc tạo ra các nội dung số đơn giản.", level: "Cơ bản 2"},
        { code: "3.1.TC1a", description: "Chỉ ra được cách tạo và chỉnh sửa nội dung có khái niệm cụ thể và mang tính phổ thông bằng những định dạng rõ ràng, phổ biến.", level: "Trung cấp 1"},
        { code: "3.1.TC1b", description: "Thể hiện được bản thân thông qua việc tạo ra các nội dung số thông thường và được xác định rõ ràng.", level: "Trung cấp 1"},
        { code: "3.1.TC2a", description: "Chỉ ra được cách tạo và chỉnh sửa nội dung ở các định dạng khác nhau.", level: "Trung cấp 2"},
        { code: "3.1.TC2b", description: "Thể hiện được bản thân thông qua việc tạo ra các nội dung số.", level: "Trung cấp 2"},
        { code: "3.1.NC1a", description: "Áp dụng được các cách tạo và chỉnh sửa nội dung ở các định dạng khác nhau.", level: "Nâng cao"},
        { code: "3.1.NC1b", description: "Chỉ ra được những cách thể hiện bản thân thông qua việc tạo ra các nội dung số.", level: "Nâng cao"}
      ] },
      { code: "3.2", name: "Tích hợp và tạo lập lại nội dung số", indicators: [
        { code: "3.2.CB1a", description: "Chọn được các cách sửa đổi, tinh chỉnh, cải thiện và tích hợp các mục đơn giản có nội dung và thông tin mới để tạo ra những nội dung và thông tin mới và độc đáo.", level: "Cơ bản 1"},
        { code: "3.2.CB2a", description: "Chọn được các cách sửa đổi, tinh chỉnh, cải thiện và tích hợp các mục đơn giản có nội dung và thông tin mới để tạo ra những nội dung và thông tin mới và độc đáo.", level: "Cơ bản 2"},
        { code: "3.2.TC1a", description: "Giải thích được các cách sửa đổi, tinh chỉnh, cải thiện và tích hợp các mục nội dung và thông tin mới được xác định rõ ràng để tạo ra những nội dung và thông tin mới và độc đáo.", level: "Trung cấp 1"},
        { code: "3.2.TC2a", description: "Thảo luận các cách sửa đổi, tinh chỉnh, cải thiện và tích hợp nội dung và thông tin mới để tạo ra những nội dung và thông tin mới và độc đáo.", level: "Trung cấp 2"},
        { code: "3.2.NC1a", description: "Làm việc với các mục nội dung và thông tin mới khác nhau, sửa đổi, tinh chỉnh, cải thiện và tích hợp chúng để tạo ra những mục mới và độc đáo.", level: "Nâng cao"}
      ] },
      { code: "3.3", name: "Thực thi bản quyền và giấy phép", indicators: [
        { code: "3.3.CB1a", description: "Xác định được các quy tắc đơn giản về bản quyền và giấy phép áp dụng cho dữ liệu, thông tin và nội dung số.", level: "Cơ bản 1"},
        { code: "3.3.CB2a", description: "Xác định được các quy tắc đơn giản về bản quyền và giấy phép áp dụng cho dữ liệu, thông tin và nội dung số.", level: "Cơ bản 2"},
        { code: "3.3.TC1a", description: "Chỉ ra được các quy tắc thông thường và được xác định rõ ràng về bản quyền và giấy phép áp dụng cho dữ liệu, thông tin và nội dung số.", level: "Trung cấp 1"},
        { code: "3.3.TC2a", description: "Thảo luận các quy tắc về bản quyền và giấy phép áp dụng cho thông tin và nội dung số.", level: "Trung cấp 2"},
        { code: "3.3.NC1a", description: "Áp dụng được các quy định khác nhau về bản quyền và giấy phép cho dữ liệu, thông tin và nội dung số.", level: "Nâng cao"}
      ] },
      { code: "3.4", name: "Lập trình", indicators: [
        { code: "3.4.CB1a", description: "Liệt kê được các hướng dẫn đơn giản để hệ thống máy tính giải quyết một vấn đề đơn giản hoặc thực hiện một nhiệm vụ đơn giản.", level: "Cơ bản 1"},
        { code: "3.4.CB2a", description: "Liệt kê được các hướng dẫn đơn giản để hệ thống máy tính giải quyết một vấn đề đơn giản hoặc thực hiện một nhiệm vụ đơn giản.", level: "Cơ bản 2"},
        { code: "3.4.TC1a", description: "Liệt kê được các hướng dẫn thông thường và được xác định rõ ràng cho một hệ thống máy tính để giải quyết các vấn đề thường ngày hoặc thực hiện các tác vụ thường ngày.", level: "Trung cấp 1"},
        { code: "3.4.TC2a", description: "Liệt kê được các hướng dẫn cho một hệ thống máy tính để giải quyết một vấn đề nhất định hoặc thực hiện một nhiệm vụ cụ thể.", level: "Trung cấp 2"},
        { code: "3.4.NC1a", description: "Tự thao tác được bằng các hướng dẫn dành cho hệ thống máy tính để giải quyết một vấn đề khác hoặc thực hiện các nhiệm vụ khác nhau.", level: "Nâng cao"}
      ] }
    ]
  },
  {
    id: 4,
    name: "IV. An toàn",
    components: [
      { code: "4.1", name: "Bảo vệ thiết bị", indicators: [
        { code: "4.1.CB1a", description: "Nhận biết được cách bảo vệ thiết bị và nội dung số một cách đơn giản.", level: "Cơ bản 1"},
        { code: "4.1.CB1b", description: "Phân biệt được rủi ro và mối đe dọa đơn giản trong môi trường số.", level: "Cơ bản 1"},
        { code: "4.1.CB1c", description: "Chọn lựa được các biện pháp an toàn và bảo mật đơn giản.", level: "Cơ bản 1"},
        { code: "4.1.CB1d", description: "Nhận biết được những cách thức đơn giản để quan tâm đến mức độ tin cậy và quyền riêng tư.", level: "Cơ bản 1"},
        { code: "4.1.CB2a", description: "Nhận biết được cách bảo vệ thiết bị và nội dung số một cách đơn giản.", level: "Cơ bản 2"},
        { code: "4.1.CB2b", description: "Phân biệt được rủi ro và mối đe dọa đơn giản trong môi trường số.", level: "Cơ bản 2"},
        { code: "4.1.CB2c", description: "Tuân theo được các biện pháp an toàn và bảo mật đơn giản.", level: "Cơ bản 2"},
        { code: "4.1.CB2d", description: "Nhận biết được những cách thức đơn giản để quan tâm đến mức độ tin cậy và quyền riêng tư.", level: "Cơ bản 2"},
        { code: "4.1.TC1a", description: "Chỉ ra được những cách thức cơ bản và phổ biến để bảo vệ thiết bị và nội dung số.", level: "Trung cấp 1"},
        { code: "4.1.TC1b", description: "Phân biệt được những rủi ro và mối đe dọa cơ bản và phổ biến trong môi trường số.", level: "Trung cấp 1"},
        { code: "4.1.TC1c", description: "Chọn lựa được các biện pháp an toàn và bảo mật rõ ràng và thường xuyên.", level: "Trung cấp 1"},
        { code: "4.1.TC1d", description: "Chỉ ra được những cách thức cơ bản và phổ biến để quan tâm đến mức độ tin cậy và quyền riêng tư.", level: "Trung cấp 1"},
        { code: "4.1.TC2a", description: "Thiết lập được những cách thức bảo vệ thiết bị và nội dung số.", level: "Trung cấp 2"},
        { code: "4.1.TC2b", description: "Phân biệt được rủi ro và mối đe dọa trong môi trường số.", level: "Trung cấp 2"},
        { code: "4.1.TC2c", description: "Chọn lựa được các biện pháp an toàn và bảo mật.", level: "Trung cấp 2"},
        { code: "4.1.TC2d", description: "Giải thích được các cách thức để quan tâm đến mức độ tin cậy và quyền riêng tư.", level: "Trung cấp 2"},
        { code: "4.1.NC1a", description: "Áp dụng được các cách khác nhau để bảo vệ thiết bị và nội dung số.", level: "Nâng cao"},
        { code: "4.1.NC1b", description: "Nhận thức được sự đa dạng của các rủi ro và đe dọa trong môi trường số.", level: "Nâng cao"},
        { code: "4.1.NC1c", description: "Áp dụng được các biện pháp an toàn và bảo mật.", level: "Nâng cao"},
        { code: "4.1.NC1d", description: "Sử dụng được các cách thức khác nhau để quan tâm đến mức độ tin cậy và quyền riêng tư.", level: "Nâng cao"}
      ] },
      { code: "4.2", name: "Bảo vệ dữ liệu cá nhân và quyền riêng tư", indicators: [
        { code: "4.2.CB1a", description: "Lựa chọn được những cách thức đơn giản để bảo vệ dữ liệu cá nhân và quyền riêng tư trong môi trường số.", level: "Cơ bản 1"},
        { code: "4.2.CB1b", description: "Nhận biết được các cách sử dụng và chia sẻ thông tin định danh cá nhân một cách an toàn, có khả năng bảo vệ bản thân và người khác.", level: "Cơ bản 1"},
        { code: "4.2.CB1c", description: "Nhận diện được các tuyên bố cơ bản trong chính sách quyền riêng tư về cách sử dụng dữ liệu cá nhân trong dịch vụ số.", level: "Cơ bản 1"},
        { code: "4.2.CB2a", description: "Lựa chọn được những cách thức đơn giản để bảo vệ dữ liệu cá nhân và quyền riêng tư trong môi trường số.", level: "Cơ bản 2"},
        { code: "4.2.CB2b", description: "Nhận biết được các cách sử dụng và chia sẻ thông tin định danh cá nhân một cách an toàn, có khả năng bảo vệ bản thân và người khác.", level: "Cơ bản 2"},
        { code: "4.2.CB2c", description: "Nhận diện được các tuyên bố cơ bản trong chính sách quyền riêng tư về cách sử dụng dữ liệu cá nhân trong dịch vụ số.", level: "Cơ bản 2"},
        { code: "4.2.TC1a", description: "Giải thích được các cách thức cơ bản và phổ biến để bảo vệ dữ liệu cá nhân và quyền riêng tư trong môi trường số.", level: "Trung cấp 1"},
        { code: "4.2.TC1b", description: "Giải thích được các cách thức cơ bản và phổ biến để sử dụng và chia sẻ thông tin định danh cá nhân một cách an toàn.", level: "Trung cấp 1"},
        { code: "4.2.TC1c", description: "Chỉ ra được các tuyên bố cơ bản và phổ biến trong chính sách quyền riêng tư về cách sử dụng dữ liệu cá nhân trong các dịch vụ số.", level: "Trung cấp 1"},
        { code: "4.2.TC2a", description: "Thảo luận về cách bảo vệ dữ liệu cá nhân và quyền riêng tư trong môi trường số.", level: "Trung cấp 2"},
        { code: "4.2.TC2b", description: "Thảo luận về cách sử dụng và chia sẻ thông tin định danh cá nhân một cách an toàn.", level: "Trung cấp 2"},
        { code: "4.2.TC2c", description: "Chỉ ra được các tuyên bố trong chính sách quyền riêng tư về cách sử dụng dữ liệu cá nhân trong các dịch vụ số.", level: "Trung cấp 2"},
        { code: "4.2.NC1a", description: "Áp dụng được các cách thức khác nhau để bảo vệ dữ liệu cá nhân và quyền riêng tư trong môi trường số.", level: "Nâng cao"},
        { code: "4.2.NC1b", description: "Áp dụng được các cách thức đặc thù để chia sẻ dữ liệu cá nhân một cách an toàn.", level: "Nâng cao"},
        { code: "4.2.NC1c", description: "Giải thích được các tuyên bố trong chính sách quyền riêng tư về cách sử dụng dữ liệu cá nhân trong các dịch vụ số.", level: "Nâng cao"}
      ] },
      { code: "4.3", name: "Bảo vệ sức khỏe và an sinh số", indicators: [
        { code: "4.3.CB1a", description: "Phân biệt được các cách thức đơn giản để tránh rủi ro và đe dọa đến sức khỏe thể chất và tinh thần khi sử dụng công nghệ số.", level: "Cơ bản 1"},
        { code: "4.3.CB1b", description: "Lựa chọn được những cách thức đơn giản để bảo vệ bản thân khỏi nguy cơ trong môi trường số.", level: "Cơ bản 1"},
        { code: "4.3.CB1c", description: "Nhận biết được những công nghệ số đơn giản cho tăng cường thịnh vượng xã hội và sự hòa hợp trong xã hội.", level: "Cơ bản 1"},
        { code: "4.3.CB2a", description: "Phân biệt được các cách thức đơn giản để tránh rủi ro và đe dọa đến sức khỏe thể chất và tinh thần khi sử dụng công nghệ số.", level: "Cơ bản 2"},
        { code: "4.3.CB2b", description: "Lựa chọn được những cách thức đơn giản để bảo vệ bản thân khỏi nguy cơ trong môi trường số.", level: "Cơ bản 2"},
        { code: "4.3.CB2c", description: "Nhận biết được những công nghệ số đơn giản cho tăng cường thịnh vượng xã hội và sự hòa hợp trong xã hội.", level: "Cơ bản 2"},
        { code: "4.3.TC1a", description: "Giải thích được những cách thức cơ bản và phổ biến để tránh rủi ro và đe dọa đối với sức khỏe thể chất và tinh thần khi sử dụng công nghệ số.", level: "Trung cấp 1"},
        { code: "4.3.TC1b", description: "Lựa chọn được những cách thức cơ bản và phổ biến để bảo vệ bản thân khỏi nguy cơ trong môi trường số.", level: "Trung cấp 1"},
        { code: "4.3.TC1c", description: "Chỉ ra được những công nghệ số cơ bản và phổ biến giúp tăng cường thịnh vượng xã hội và sự hòa hợp trong xã hội.", level: "Trung cấp 1"},
        { code: "4.3.TC2a", description: "Giải thích được những cách thức để tránh những sự đe dọa liên quan đến việc sử dụng công nghệ số đối với sức khỏe thể chất và tinh thần.", level: "Trung cấp 2"},
        { code: "4.3.TC2b", description: "Lựa chọn được cách thức bảo vệ bản thân và người khác khỏi nguy cơ trong môi trường số.", level: "Trung cấp 2"},
        { code: "4.3.TC2c", description: "Thảo luận về những công nghệ số giúp tăng cường thịnh vượng xã hội và sự hòa hợp trong xã hội.", level: "Trung cấp 2"},
        { code: "4.3.NC1a", description: "Trình bày được các cách thức khác nhau để tránh rủi ro và đe dọa đến sức khỏe thể chất và tinh thần khi sử dụng công nghệ số.", level: "Nâng cao"},
        { code: "4.3.NC1b", description: "Áp dụng được các cách thức khác nhau để bảo vệ bản thân và người khác khỏi nguy cơ trong môi trường số.", level: "Nâng cao"},
        { code: "4.3.NC1c", description: "Trình bày được các công nghệ số khác nhau giúp tăng cường thịnh vượng xã hội và sự hòa hợp trong xã hội.", level: "Nâng cao"}
      ] },
      { code: "4.4", name: "Bảo vệ môi trường", indicators: [
        { code: "4.4.CB1a", description: "Nhận biết được tác động cơ bản của công nghệ số và việc sử dụng công nghệ số đối với môi trường.", level: "Cơ bản 1"},
        { code: "4.4.CB2a", description: "Nhận biết được tác động cơ bản của công nghệ số và việc sử dụng công nghệ số đối với môi trường.", level: "Cơ bản 2"},
        { code: "4.4.TC1a", description: "Chỉ ra được những tác động cơ bản và phổ biến của công nghệ số và việc sử dụng công nghệ số đối với môi trường.", level: "Trung cấp 1"},
        { code: "4.4.TC2a", description: "Thảo luận về các cách thức bảo vệ môi trường khỏi tác động của công nghệ số và việc sử dụng công nghệ số.", level: "Trung cấp 2"},
        { code: "4.4.NC1a", description: "Trình bày được các cách thức khác nhau để bảo vệ môi trường khỏi tác động của công nghệ số và việc sử dụng công nghệ số.", level: "Nâng cao"}
      ] }
    ]
  },
  {
    id: 5,
    name: "V. Giải quyết vấn đề",
    components: [
      { code: "5.1", name: "Giải quyết các vấn đề kỹ thuật", indicators: [
        { code: "5.1.CB1a", description: "Xác định được các vấn đề kỹ thuật đơn giản khi vận hành thiết bị và sử dụng môi trường số.", level: "Cơ bản 1"},
        { code: "5.1.CB1b", description: "Xác định được các giải pháp đơn giản để giải quyết chúng.", level: "Cơ bản 1"},
        { code: "5.1.CB2a", description: "Xác định được các vấn đề kỹ thuật đơn giản khi vận hành thiết bị và sử dụng môi trường số.", level: "Cơ bản 2"},
        { code: "5.1.CB2b", description: "Xác định được các giải pháp đơn giản để giải quyết chúng.", level: "Cơ bản 2"},
        { code: "5.1.TC1a", description: "Chỉ ra được các vấn đề kỹ thuật thông thường và được xác định rõ ràng khi vận hành thiết bị và sử dụng môi trường số.", level: "Trung cấp 1"},
        { code: "5.1.TC1b", description: "Chọn được các giải pháp được xác định rõ ràng và thông thường cho chúng.", level: "Trung cấp 1"},
        { code: "5.1.TC2a", description: "Phân biệt được các vấn đề kỹ thuật khi vận hành thiết bị và sử dụng môi trường số.", level: "Trung cấp 2"},
        { code: "5.1.TC2b", description: "Chọn được giải pháp cho chúng.", level: "Trung cấp 2"},
        { code: "5.1.NC1a", description: "Đánh giá được các vấn đề kỹ thuật khi sử dụng môi trường số và vận hành các thiết bị số.", level: "Nâng cao"},
        { code: "5.1.NC1b", description: "Áp dụng được các giải pháp khác nhau cho chúng.", level: "Nâng cao"}
      ] },
      { code: "5.2", name: "Xác định nhu cầu và giải pháp công nghệ", indicators: [
        { code: "5.2.CB1a", description: "Xác định được nhu cầu cá nhân.", level: "Cơ bản 1"},
        { code: "5.2.CB1b", description: "Nhận ra được các công cụ số đơn giản và các giải pháp công nghệ có thể có để giải quyết những nhu cầu đó.", level: "Cơ bản 1"},
        { code: "5.2.CB1c", description: "Chọn được những cách đơn giản để điều chỉnh và tùy chỉnh môi trường số theo nhu cầu cá nhân.", level: "Cơ bản 1"},
        { code: "5.2.CB2a", description: "Xác định được nhu cầu cá nhân.", level: "Cơ bản 2"},
        { code: "5.2.CB2b", description: "Nhận ra được các công cụ số đơn giản và các giải pháp công nghệ có thể có để giải quyết những nhu cầu đó.", level: "Cơ bản 2"},
        { code: "5.2.CB2c", description: "Chọn được những cách đơn giản để điều chỉnh và tùy chỉnh môi trường số theo nhu cầu cá nhân.", level: "Cơ bản 2"},
        { code: "5.2.TC1a", description: "Chỉ ra được những nhu cầu được xác định rõ ràng và thường xuyên.", level: "Trung cấp 1"},
        { code: "5.2.TC1b", description: "Chọn được các công cụ số thông thường và được xác định rõ ràng cũng như các giải pháp công nghệ có thể có để giải quyết những nhu cầu đó.", level: "Trung cấp 1"},
        { code: "5.2.TC1c", description: "Chọn được những cách thông thường và được xác định rõ ràng để điều chỉnh và tùy chỉnh môi trường số theo nhu cầu cá nhân.", level: "Trung cấp 1"},
        { code: "5.2.TC2a", description: "Giải thích nhu cầu cá nhân.", level: "Trung cấp 2"},
        { code: "5.2.TC2b", description: "Lựa chọn được các công cụ số và các giải pháp công nghệ có thể có để giải quyết những nhu cầu đó.", level: "Trung cấp 2"},
        { code: "5.2.TC2c", description: "Chọn được cách điều chỉnh và tùy chỉnh môi trường số theo nhu cầu cá nhân.", level: "Trung cấp 2"},
        { code: "5.2.NC1a", description: "Đánh giá được nhu cầu cá nhân.", level: "Nâng cao"},
        { code: "5.2.NC1b", description: "Áp dụng được các công cụ số khác nhau và các giải pháp công nghệ có thể có để giải quyết những nhu cầu đó.", level: "Nâng cao"},
        { code: "5.2.NC1c", description: "Sử dụng được các cách khác nhau để điều chỉnh và tùy chỉnh môi trường số theo nhu cầu cá nhân.", level: "Nâng cao"}
      ] },
      { code: "5.3", name: "Sử dụng sáng tạo công nghệ số", indicators: [
        { code: "5.3.CB1a", description: "Xác định được các công cụ và công nghệ số đơn giản có thể được sử dụng để tạo ra kiến thức và đổi mới quy trình cũng như sản phẩm.", level: "Cơ bản 1"},
        { code: "5.3.CB1b", description: "Thể hiện được sự quan tâm của cá nhân và tập thể đến quá trình xử lý nhận thức đơn giản để hiểu và giải quyết các vấn đề khái niệm đơn giản và các tình huống có vấn đề trong môi trường số.", level: "Cơ bản 1"},
        { code: "5.3.CB2a", description: "Xác định được các công cụ và công nghệ số đơn giản có thể được sử dụng để tạo ra kiến thức và đổi mới quy trình cũng như sản phẩm.", level: "Cơ bản 2"},
        { code: "5.3.CB2b", description: "Tuân theo quy trình nhận thức đơn giản của cá nhân và tập thể để hiểu và giải quyết các vấn đề khái niệm đơn giản và các tình huống có vấn đề trong môi trường số.", level: "Cơ bản 2"},
        { code: "5.3.TC1a", description: "Chọn được các công cụ và công nghệ số có thể được sử dụng để tạo ra kiến thức rõ ràng cũng như các quy trình và sản phẩm đổi mới được xác định rõ ràng.", level: "Trung cấp 1"},
        { code: "5.3.TC1b", description: "Gắn kết được cá nhân và tập thể vào một số quá trình xử lý nhận thức để hiểu và giải quyết các vấn đề mang tính khái niệm và tình huống có vấn đề thông thường và được xác định rõ ràng trong môi trường số.", level: "Trung cấp 1"},
        { code: "5.3.TC2a", description: "Phân biệt được các công cụ và công nghệ số có thể được sử dụng để tạo ra kiến thức và đổi mới quy trình và sản phẩm.", level: "Trung cấp 2"},
        { code: "5.3.TC2b", description: "Gắn kết được cá nhân và tập thể vào quá trình xử lý nhận thức để hiểu và giải quyết các vấn đề khái niệm và tình huống có vấn đề trong môi trường số.", level: "Trung cấp 2"},
        { code: "5.3.NC1a", description: "Áp dụng được các công cụ và công nghệ số khác nhau để tạo ra kiến thức cũng như các quy trình và sản phẩm đổi mới.", level: "Nâng cao"},
        { code: "5.3.NC1b", description: "Áp dụng xử lý nhận thức của cá nhân và tập thể để giải quyết các vấn đề khái niệm và tình huống có vấn đề khác nhau trong môi trường số.", level: "Nâng cao"}
      ] },
      { code: "5.4", name: "Xác định các vấn đề cần cải thiện về năng lực số", indicators: [
        { code: "5.4.CB1a", description: "Nhận ra được NLS của tôi cần được cải thiện hoặc cập nhật ở đâu.", level: "Cơ bản 1"},
        { code: "5.4.CB1b", description: "Xác định được nơi để tìm kiếm cơ hội phát triển bản thân và cập nhật sự phát triển công nghệ số.", level: "Cơ bản 1"},
        { code: "5.4.CB2a", description: "Nhận ra được NLS của tôi cần được cải thiện hoặc cập nhật ở đâu.", level: "Cơ bản 2"},
        { code: "5.4.CB2b", description: "Xác định được nơi để tìm kiếm cơ hội phát triển bản thân và cập nhật sự phát triển công nghệ số.", level: "Cơ bản 2"},
        { code: "5.4.TC1a", description: "Giải thích được NLS của bản thân cần được cải thiện hoặc cập nhật ở đâu.", level: "Trung cấp 1"},
        { code: "5.4.TC1b", description: "Chỉ ra được nơi để tìm kiếm các cơ hội được xác định rõ ràng để phát triển bản thân và cập nhật sự phát triển công nghệ số.", level: "Trung cấp 1"},
        { code: "5.4.TC2a", description: "Thảo luận về lĩnh vực NLS của bản thân cần được cải thiện hoặc cập nhật.", level: "Trung cấp 2"},
        { code: "5.4.TC2b", description: "Chỉ ra được cách hỗ trợ người khác phát triển NLS của họ.", level: "Trung cấp 2"},
        { code: "5.4.TC2c", description: "Chỉ ra được nơi để tìm kiếm cơ hội phát triển bản thân và cập nhật sự phát triển công nghệ số.", level: "Trung cấp 2"},
        { code: "5.4.NC1a", description: "Chứng minh được NLS của tôi cần được cải thiện hoặc cập nhật ở đâu.", level: "Nâng cao"},
        { code: "5.4.NC1b", description: "Minh họa được những cách khác nhau để hỗ trợ người khác phát triển NLS của họ.", level: "Nâng cao"},
        { code: "5.4.NC1c", description: "Đề xuất được các cơ hội khác nhau để phát triển bản thân và cập nhật sự phát triển công nghệ số.", level: "Nâng cao"}
      ] }
    ]
  },
  {
    id: 6,
    name: "VI. Ứng dụng trí tuệ nhân tạo (AI)",
    components: [
      { code: "6.1", name: "Hiểu biết về trí tuệ nhân tạo (gồm GenAI)", indicators: [
        { code: "6.1.CB2a", description: "Xác định được các khái niệm cơ bản của AI.", level: "Cơ bản 2"},
        { code: "6.1.CB2b", description: "Nhớ lại được các ứng dụng đơn giản của AI trong cuộc sống hàng ngày.", level: "Cơ bản 2"},
        { code: "6.1.TC1a", description: "Giải thích được nguyên tắc hoạt động cơ bản của AI.", level: "Trung cấp 1"},
        { code: "6.1.TC1b", description: "Diễn giải được các thuật ngữ và khái niệm liên quan đến AI.", level: "Trung cấp 1"},
        { code: "6.1.TC2a", description: "Áp dụng được các nguyên tắc cơ bản của AI để giải quyết vấn đề đơn giản.", level: "Trung cấp 2"},
        { code: "6.1.TC2b", description: "Thực hiện được các thao tác cơ bản trên các công cụ AI.", level: "Trung cấp 2"},
        { code: "6.1.NC1a", description: "Phân tích được cách AI hoạt động trong các ứng dụng cụ thể.", level: "Nâng cao"},
        { code: "6.1.NC1b", description: "So sánh được các hệ thống AI khác nhau và cách chúng xử lý dữ liệu.", level: "Nâng cao"}
      ] },
      { code: "6.2", name: "Sử dụng AI có đạo đức và trách nhiệm", indicators: [
        { code: "6.2.CB1a", description: "Nhận diện được các công cụ AI đơn giản.", level: "Cơ bản 1"},
        { code: "6.2.CB1b", description: "Thực hiện được các thao tác cơ bản với các công cụ AI.", level: "Cơ bản 1"},
        { code: "6.2.CB1c", description: "Nhận thức được cơ bản về các vấn đề đạo đức và pháp lý liên quan đến AI.", level: "Cơ bản 1"},
        { code: "6.2.CB2a", description: "Áp dụng được các công cụ AI để giải quyết vấn đề đơn giản.", level: "Cơ bản 2"},
        { code: "6.2.CB2b", description: "Tương tác được với các hệ thống AI cơ bản.", level: "Cơ bản 2"},
        { code: "6.2.CB2c", description: "Tuân thủ các quy định pháp luật cơ bản khi sử dụng AI.", level: "Cơ bản 2"},
        { code: "6.2.TC1a", description: "Sử dụng được các công cụ AI trong công việc và học tập hàng ngày.", level: "Trung cấp 1"},
        { code: "6.2.TC1b", description: "Thực hành được các kỹ năng sử dụng AI thông qua các bài tập và dự án nhỏ.", level: "Trung cấp 1"},
        { code: "6.2.TC1c", description: "Xem xét các khía cạnh đạo đức khi sử dụng AI, bảo đảm không vi phạm quyền riêng tư và bảo mật dữ liệu.", level: "Trung cấp 1"},
        { code: "6.2.TC2a", description: "Tối ưu hóa việc sử dụng các công cụ AI để đạt hiệu quả cao hơn.", level: "Trung cấp 2"},
        { code: "6.2.TC2b", description: "Quản lý được việc triển khai các công cụ AI trong các dự án nhỏ.", level: "Trung cấp 2"},
        { code: "6.2.TC2c", description: "Bảo vệ được dữ liệu cá nhân và tuân thủ các quy định pháp luật về bảo mật thông tin khi sử dụng AI.", level: "Trung cấp 2"},
        { code: "6.2.NC1a", description: "Phát triển được các ứng dụng AI tùy chỉnh để giải quyết các vấn đề cụ thể.", level: "Nâng cao"},
        { code: "6.2.NC1b", description: "Điều chỉnh được các hệ thống AI để phù hợp với nhu cầu cụ thể.", level: "Nâng cao"},
        { code: "6.2.NC1c", description: "Đánh giá và giảm thiểu được các rủi ro đạo đức và pháp lý liên quan đến việc sử dụng AI.", level: "Nâng cao"}
      ] },
      { code: "6.3", name: "Đánh giá các công cụ AI", indicators: [
        { code: "6.3.CB1a", description: "Nhận diện được một số vật dụng/trò chơi thông minh có sử dụng AI.", level: "Cơ bản 1"},
        { code: "6.3.CB1b", description: "Nhớ được rằng không phải mọi thông tin từ máy móc đều đúng.", level: "Cơ bản 1"},
        { code: "6.3.CB2a", description: "Nhận diện được các yếu tố cơ bản của hệ thống AI cần được đánh giá.", level: "Cơ bản 2"},
        { code: "6.3.CB2b", description: "Mô tả được các chức năng chính của hệ thống AI.", level: "Cơ bản 2"},
        { code: "6.3.TC1a", description: "Giải thích được cách thức hoạt động của các hệ thống AI đơn giản.", level: "Trung cấp 1"},
        { code: "6.3.TC1b", description: "Tóm tắt được các đặc điểm và ứng dụng của hệ thống AI.", level: "Trung cấp 1"},
        { code: "6.3.TC2a", description: "Phân tích được hiệu quả của hệ thống AI trong việc giải quyết các vấn đề cụ thể.", level: "Trung cấp 2"},
        { code: "6.3.TC2b", description: "So sánh được hiệu suất của các hệ thống AI khác nhau.", level: "Trung cấp 2"},
        { code: "6.3.NC1a", description: "Đánh giá được độ chính xác và tin cậy của các hệ thống AI.", level: "Nâng cao"},
        { code: "6.3.NC1b", description: "Xem xét được các kết quả và đưa ra nhận xét về hiệu quả của hệ thống AI.", level: "Nâng cao"}
      ] }
    ]
  }
];
