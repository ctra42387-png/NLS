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
          // Cơ bản 1 (Lớp 1-3)
          { code: "1.1.CB1a", description: "Xác định nhu cầu thông tin, tìm kiếm đơn giản.", level: "Cơ bản 1" },
          { code: "1.1.CB1b", description: "Tìm được cách truy cập dữ liệu, thông tin.", level: "Cơ bản 1" },
          { code: "1.1.CB1c", description: "Xác định được các chiến lược tìm kiếm đơn giản.", level: "Cơ bản 1" },
          // Cơ bản 2 (Lớp 4-5)
          { code: "1.1.CB2a", description: "Xác định được nhu cầu thông tin.", level: "Cơ bản 2" },
          { code: "1.1.CB2b", description: "Tìm được dữ liệu thông qua tìm kiếm đơn giản.", level: "Cơ bản 2" },
          { code: "1.1.CB2c", description: "Tìm được cách truy cập và điều hướng dữ liệu.", level: "Cơ bản 2" },
          { code: "1.1.CB2d", description: "Xác định được chiến lược tìm kiếm đơn giản.", level: "Cơ bản 2" },
          // Trung cấp 1 (Lớp 6-7)
          { code: "1.1.TC1a", description: "Giải thích được nhu cầu thông tin.", level: "Trung cấp 1" },
          { code: "1.1.TC1b", description: "Thực hiện tìm kiếm theo quy trình để tìm dữ liệu.", level: "Trung cấp 1" },
          { code: "1.1.TC1c", description: "Giải thích được cách truy cập và điều hướng kết quả.", level: "Trung cấp 1" },
          { code: "1.1.TC1d", description: "Giải thích rõ ràng chiến lược tìm kiếm.", level: "Trung cấp 1" },
          // Trung cấp 2 (Lớp 8-9)
          { code: "1.1.TC2a", description: "Minh họa được nhu cầu thông tin.", level: "Trung cấp 2" },
          { code: "1.1.TC2b", description: "Tổ chức được tìm kiếm dữ liệu trong môi trường số.", level: "Trung cấp 2" },
          { code: "1.1.TC2c", description: "Mô tả cách truy cập và điều hướng dữ liệu.", level: "Trung cấp 2" },
          { code: "1.1.TC2d", description: "Tổ chức được các chiến lược tìm kiếm.", level: "Trung cấp 2" },
          // Nâng cao (THPT)
          { code: "1.1.NC1a", description: "Đáp ứng được nhu cầu thông tin.", level: "Nâng cao" },
          { code: "1.1.NC1b", description: "Áp dụng kỹ thuật tìm kiếm để lấy dữ liệu.", level: "Nâng cao" },
          { code: "1.1.NC1c", description: "Chỉ cho người khác cách truy cập dữ liệu.", level: "Nâng cao" },
          { code: "1.1.NC1d", description: "Tự đề xuất được chiến lược tìm kiếm.", level: "Nâng cao" }
        ]
      },
      { 
        code: "1.2", 
        name: "Đánh giá dữ liệu, thông tin và nội dung số",
        indicators: [
           { code: "1.2.TC1a", description: "Thực hiện phân tích, so sánh, đánh giá độ tin cậy của nguồn dữ liệu.", level: "Trung cấp 1" },
           { code: "1.2.TC1b", description: "Thực hiện phân tích, diễn giải và đánh giá dữ liệu.", level: "Trung cấp 1" }
        ]
      },
      { code: "1.3", name: "Quản lý dữ liệu, thông tin và nội dung số" }
    ]
  },
  {
    id: 2,
    name: "II. Giao tiếp và hợp tác trong môi trường số",
    components: [
      { code: "2.1", name: "Tương tác thông qua công nghệ số" },
      { code: "2.2", name: "Chia sẻ thông tin và nội dung thông qua công nghệ số" },
      { code: "2.3", name: "Sử dụng công nghệ số để thực hiện trách nhiệm công dân" },
      { code: "2.4", name: "Hợp tác thông qua công nghệ số" },
      { code: "2.5", name: "Thực hiện quy tắc ứng xử trên mạng (Netiquette)" },
      { code: "2.6", name: "Quản lý danh tính số" }
    ]
  },
  {
    id: 3,
    name: "III. Sáng tạo nội dung số",
    components: [
      { code: "3.1", name: "Phát triển nội dung số" },
      { code: "3.2", name: "Tích hợp và tạo lập lại nội dung số" },
      { code: "3.3", name: "Thực thi bản quyền và giấy phép" },
      { code: "3.4", name: "Lập trình" }
    ]
  },
  {
    id: 4,
    name: "IV. An toàn",
    components: [
      { code: "4.1", name: "Bảo vệ thiết bị" },
      { code: "4.2", name: "Bảo vệ dữ liệu cá nhân và quyền riêng tư" },
      { code: "4.3", name: "Bảo vệ sức khỏe và an sinh số" },
      { code: "4.4", name: "Bảo vệ môi trường" }
    ]
  },
  {
    id: 5,
    name: "V. Giải quyết vấn đề",
    components: [
      { code: "5.1", name: "Giải quyết các vấn đề kỹ thuật" },
      { code: "5.2", name: "Xác định nhu cầu và giải pháp công nghệ" },
      { code: "5.3", name: "Sử dụng sáng tạo công nghệ số" },
      { code: "5.4", name: "Xác định các vấn đề cần cải thiện về năng lực số" }
    ]
  },
  {
    id: 6,
    name: "VI. Ứng dụng trí tuệ nhân tạo (AI)",
    components: [
      { code: "6.1", name: "Hiểu biết về trí tuệ nhân tạo (gồm GenAI)" },
      { code: "6.2", name: "Sử dụng AI có đạo đức và trách nhiệm" },
      { code: "6.3", name: "Đánh giá các công cụ AI" }
    ]
  }
];
