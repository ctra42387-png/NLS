import { GoogleGenAI, Type, Schema } from "@google/genai";
import { LessonInput, LessonPlanResponse } from "../types";

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// Define the response schema strictly to ensure easy JSON parsing
const lessonPlanSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    title: { type: Type.STRING, description: "Tiêu đề bài học được gợi ý" },
    overview: { type: Type.STRING, description: "Tổng quan ngắn gọn về cách tích hợp công nghệ vào bài học này" },
    competencySummary: { type: Type.STRING, description: "Tóm tắt các năng lực số chính mà học sinh sẽ phát triển dựa trên 6 miền năng lực" },
    suggestedTools: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          name: { type: Type.STRING },
          description: { type: Type.STRING },
          usage: { type: Type.STRING, description: "Cách công cụ này được sử dụng cụ thể trong bài học" },
          link: { type: Type.STRING, nullable: true },
        },
        required: ["name", "description", "usage"],
      },
    },
    activities: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          phase: { type: Type.STRING, description: "Giai đoạn bài học (Khởi động, Khám phá, Luyện tập, Vận dụng)" },
          description: { type: Type.STRING, description: "Mô tả hoạt động sư phạm" },
          digitalIntegration: { type: Type.STRING, description: "Chi tiết cách sử dụng công nghệ trong hoạt động này" },
          competencyFocus: { 
            type: Type.ARRAY, 
            items: { type: Type.STRING },
            description: "Các năng lực số cụ thể theo Thông tư 02/2025 (VD: 1.1. Duyệt tìm kiếm..., 6.2. Sử dụng AI...)"
          },
        },
        required: ["phase", "description", "digitalIntegration", "competencyFocus"],
      },
    },
    assessments: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          method: { type: Type.STRING },
          tool: { type: Type.STRING },
          criteria: { type: Type.STRING },
        },
        required: ["method", "tool", "criteria"],
      },
    },
  },
  required: ["title", "overview", "suggestedTools", "activities", "assessments", "competencySummary"],
};

export const generateDigitalLessonPlan = async (input: LessonInput): Promise<LessonPlanResponse> => {
  const model = "gemini-2.5-flash";
  
  const prompt = `
    Bạn là chuyên gia giáo dục về Chuyển đổi số, nắm vững Thông tư số 02/2025/TT-BGDĐT ngày 24/01/2025 của Bộ GD&ĐT Việt Nam quy định Khung năng lực số cho người học.

    **KHUNG NĂNG LỰC SỐ (Thông tư 02/2025/TT-BGDĐT) bao gồm 6 miền:**
    1. **Khai thác dữ liệu và thông tin**: Duyệt, tìm kiếm, đánh giá, quản lý dữ liệu/thông tin.
    2. **Giao tiếp và hợp tác trong môi trường số**: Tương tác, chia sẻ, thực hiện trách nhiệm công dân, hợp tác, quy tắc ứng xử, quản lý danh tính số.
    3. **Sáng tạo nội dung số**: Phát triển nội dung, tích hợp/tái tạo, bản quyền/giấy phép, lập trình.
    4. **An toàn**: Bảo vệ thiết bị, dữ liệu cá nhân, sức khỏe/an sinh, môi trường.
    5. **Giải quyết vấn đề**: Giải quyết vấn đề kỹ thuật, xác định nhu cầu/giải pháp công nghệ, sử dụng sáng tạo, xác định lỗ hổng năng lực.
    6. **Ứng dụng trí tuệ nhân tạo (AI)**: Hiểu biết về AI (bao gồm GenAI), sử dụng AI có đạo đức/trách nhiệm, đánh giá AI.

    **NHIỆM VỤ:**
    Thiết kế kế hoạch bài dạy tích hợp năng lực số cho:
    - Môn: ${input.subject}
    - Lớp: ${input.grade}
    - Chủ đề: ${input.topic}
    - Thời lượng: ${input.duration}
    - Mục tiêu gốc: ${input.objectives}

    **YÊU CẦU:**
    1. Đề xuất công cụ số phù hợp với bối cảnh giáo dục Việt Nam (ưu tiên công cụ miễn phí/phổ biến).
    2. Thiết kế hoạt động học tập sao cho học sinh thực hành được các năng lực cụ thể trong 6 miền trên. **Đặc biệt chú ý tích hợp Miền 6 (AI) nếu phù hợp với lớp và môn học.**
    3. Trong phần 'competencyFocus', hãy ghi rõ mã và tên năng lực (VD: "1.1. Tìm kiếm dữ liệu", "6.2. Sử dụng AI có trách nhiệm").
    4. Đánh giá kết quả học tập thông qua sản phẩm số hoặc quá trình thao tác số.

    Trả về JSON theo schema. Ngôn ngữ: Tiếng Việt.
  `;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: lessonPlanSchema,
        temperature: 0.7,
      },
    });

    if (response.text) {
      return JSON.parse(response.text) as LessonPlanResponse;
    } else {
      throw new Error("Không nhận được phản hồi từ Gemini.");
    }
  } catch (error) {
    console.error("Lỗi khi gọi Gemini API:", error);
    throw error;
  }
};
