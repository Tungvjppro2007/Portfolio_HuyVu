// DỮ LIỆU ĐƯỢC HỆ THỐNG HÓA CHÍNH XÁC TỪ FILE TÀI LIỆU CỦA USER
const dataBai2 = [
    { stt: 1, name: "Securing the Threads: In-Depth Analysis of IoT Architecture and Threat Mitigation (2025)", type: "Bài báo khoa học", source: "IEEE Xplore / SMART Conference", method: "Phân tích thực nghiệm đa tầng kiến trúc IoT, mô phỏng tấn công DDoS và giải pháp Học máy kết hợp Blockchain.", rank: "Rất cao (A): Xuất bản bởi tổ chức uy tín toàn cầu IEEE, phản ánh xu hướng công nghệ bảo mật mới nhất năm 2025." },
    { stt: 2, name: "IoT Security through ML/DL: Software Engineering Challenges and Directions (2025)", type: "Bài báo khoa học", source: "ICCK Journal of Software Engineering", method: "Nghiên cứu hệ thống (Systematic Review) dữ liệu từ IEEE Xplore giai đoạn 2020–2024, đánh giá giải pháp AI/ML chống xâm nhập.", rank: "Rất cao (A): Phương pháp tổng quan hệ thống chuẩn mực, có dữ liệu đối sánh định lượng rõ ràng." },
    { stt: 3, name: "Deeper Insight Into Why Authentication Schemes in IoT Environments Fail to Achieve the Desired Security (Yimin Guo et al., 2024)", type: "Bài báo khoa học", source: "IEEE Transactions on Information Forensics and Security", method: "Phân tích toán học và thực nghiệm các thuật toán xác thực lỗi trên thiết bị IoT đầu cuối.", rank: "Xuất sắc (A+): Tạp chí thuộc nhóm Q1 ISI (IEEE Transactions), độ kiểm duyệt và độ tin cậy học thuật cao nhất." },
    { stt: 4, name: "A Review of Lightweight IoT Authentication Protocols from Perspective of Costs (I. Cetintav et al., 2025)", type: "Bài báo khoa học", source: "IEEE Access", method: "So sánh hiệu năng phần hardware, chi phí tính toán và mức tiêu thụ năng lượng của các giao thức mã hóa hạng nhẹ.", rank: "Rất cao (A): Đánh giá tối ưu hóa phần cứng sâu sắc, dữ liệu thực tế từ phòng thí nghiệm nhúng." },
    { stt: 5, name: "Automated IoT Firmware Vulnerability Detection Using Large Language Models (Preprints, 2025)", type: "Bài báo khoa học", source: "MDPI Preprints / OWASP Framework", method: "Thực nghiệm xây dựng pipeline tự động hóa công cụ dịch ngược (Ghidra, EMBA) phối hợp với mô hình ngôn ngữ lớn LLM.", rank: "Cao (B): Ý tưởng cực kỳ đột phá và thực tế, tuy nhiên đang ở dạng tiền xuất bản (Preprint) cần đối chiếu thêm." },
    { stt: 6, name: "Exploring security threats and solutions Techniques for IoT: from vulnerabilities to vigilance (Sahu & Mazumdar, 2024)", type: "Bài báo khoa học", source: "Frontiers in Artificial Intelligence", method: "Khảo sát phân loại tấn công tầng vật lý (Side-channel, phần cứng) và tầng mạng (Sniffing, XSS).", rank: "Rất cao (A): Thuộc hệ thống Frontiers uy tín, phân tích chi tiết từ lỗ hổng phần cứng nguyên bản." },
    { stt: 7, name: "A Literature Review on Security in the Internet of Things: Identifying Critical Categories (MDPI, 2025)", type: "Bài báo khoa học", source: "MDPI Computer Sciences", method: "Phân tích thư mục, tổng hợp trắc lượng khoa học các xu hướng tấn công từ năm 2021 đến 2025.", rank: "Rất cao (A): Cung cấp các số liệu thống kê trực quan về tốc độ tăng trưởng thiết bị và các dạng mã độc mới." },
    { stt: 8, name: "Comprehensive Analysis of IoT Security: Threats, Detection Methods, and Defense Strategies (JIOT, 2024)", type: "Bài báo khoa học", source: "Tech Science Press", method: "Phân tích kiến trúc 3 lớp (Hardware, System, User Layer) và đề xuất hash mật mã để xác thực firmware integrity.", rank: "Rất cao (A): Định hướng giải pháp kỹ thuật rất rõ ràng cho lập trình viên hệ thống nhúng." },
    { stt: 9, name: "Enhancing IoT Security: Predicting Password Vulnerability using Machine Learning (EJECE, 2024)", type: "Bài báo khoa học", source: "European Journal of Electrical Engineering", method: "Sử dụng tập dữ liệu lưu trữ (Archival data) các cuộc tấn công Brute Force để huấn luyện mô hình dự đoán độ yếu mật khẩu.", rank: "Cao (B): Phương pháp tiếp cận thực tế nhưng tập dữ liệu đầu vào phụ thuộc nhiều vào lịch sử cũ." },
    { stt: 10, name: "OWASP IoT Security Testing Guide (2025/2026)", type: "Sách chuyên khảo / Cẩm nang chuyên ngành", source: "Open Worldwide Application Security Project (OWASP)", method: "Tổng hợp các kịch bản kiểm thử (Test cases) chuẩn quốc tế áp dụng cho phân tích tĩnh và động trên hệ thống IoT.", rank: "Xuất sắc (A+): Cẩm nang chuẩn công nghiệp (Industry Standard), độ uy tín thực tế tối cao cho mọi kỹ sư bảo mật." }
];

const dataBai4 = [
    { list: "Backlog (Ý tưởng / Chuẩn bị)", card: "- Nghiên cứu tài liệu API<br>- Thiết kế sơ đồ kiến trúc hệ thống", member: "Cả nhóm", label: "Khó / Nghiên cứu", due: "05/05/2026" },
    { list: "To Do (Cần làm)", card: "- Thiết kế giao diện giao diện Front-end<br>- Viết báo cáo phân tích chương 1 & 2", member: "Nguyễn Khánh An", label: "Trung bình", due: "08/05/2026" },
    { list: "In Progress (Đang làm)", card: "- Cấu hình mạch vi điều khiển ESP32<br>- Lập trình chức năng phân quyền cơ sở dữ liệu", member: "Trần Bá Chính", label: "Ưu tiên cao", due: "16/05/2026" },
    { list: "Testing / Review (Kiểm thử)", card: "- Đánh giá hiệu năng và đo dòng tiêu thụ năng lượng", member: "Lê Văn Đạt", label: "Kiểm thử", due: "01/06/2026" },
    { list: "Done (Đã hoàn thành)", card: "- Khởi tạo repository trên GitHub<br>- Viết slide thuyết trình tổng quan bài tập", member: "Cả nhóm", label: "Hoàn thành", due: "03/06/2026" }
];

// KHỞI TẠO VÀ ĐỔ DỮ LIỆU LÊN GIAO DIỆN KHI TRANG TẢI XONG
document.addEventListener("DOMContentLoaded", () => {
    renderTableBai2();
    renderTableBai4();
    initNavigation();
});

// Đổ dữ liệu bảng Bài 2
function renderTableBai2() {
    const tbody = document.getElementById("table-bai2");
    if (!tbody) return;
    
    tbody.innerHTML = dataBai2.map(item => {
        let badgeClass = "badge-b";
        if (item.rank.includes("(A+):")) badgeClass = "badge-aplus";
        else if (item.rank.includes("(A):")) badgeClass = "badge-a";

        return `
            <tr>
                <td>${item.stt}</td>
                <td><strong>${item.name}</strong></td>
                <td>${item.type}</td>
                <td>${item.source}</td>
                <td>${item.method}</td>
                <td><span class="badge ${badgeClass}">${item.rank}</span></td>
            </tr>
        `;
    }).join("");
}

// Đổ dữ liệu bảng Bài 4
function renderTableBai4() {
    const tbody = document.getElementById("table-bai4");
    if (!tbody) return;

    tbody.innerHTML = dataBai4.map(item => `
        <tr>
            <td><span class="highlight">${item.list}</span></td>
            <td>${item.card}</td>
            <td><i class="fa-solid fa-user-gear"></i> ${item.member}</td>
            <td>${item.label}</td>
            <td><code>${item.due}</code></td>
        </tr>
    `).join("");
}

// XỬ LÝ CHUYỂN TRANG/TAB (SINGLE PAGE APPLICATION) VÀ RESPONSIVE SIDEBAR
function initNavigation() {
    const navItems = document.querySelectorAll(".nav-links li");
    const tabs = document.querySelectorAll(".tab-content");
    const sidebar = document.querySelector(".sidebar");
    const toggleBtn = document.getElementById("sidebarToggle");

    navItems.forEach(item => {
        item.addEventListener("click", () => {
            // Xóa class active cũ của nút
            document.querySelector(".nav-links li.active").classList.remove("active");
            // Kích hoạt class active cho nút mới click
            item.classList.add("active");

            // Chuyển view nội dung tương ứng
            const target = item.getAttribute("data-target");
            tabs.forEach(tab => {
                if (tab.id === target) {
                    tab.classList.add("active");
                } else {
                    tab.classList.remove("active");
                }
            });

            // Tự động đóng sidebar khi chọn mục trên giao diện mobile
            if (window.innerWidth <= 768) {
                sidebar.classList.remove("active");
                toggleBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
            }
            
            // Cuộn mượt lên đầu trang khi chuyển mục
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // Toggle Sidebar trên Mobile thiết bị di động
    if (toggleBtn && sidebar) {
        toggleBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            sidebar.classList.toggle("active");
            if (sidebar.classList.contains("active")) {
                toggleBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
            } else {
                toggleBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
            }
        });
    }
}
