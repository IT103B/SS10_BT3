const borrowRecords = [
  {
    recordId: "PM01",
    studentId: "SV101",
    bookTitle: "Đắc Nhân Tâm",
    borrowDays: 10,
    isReturned: false,
  },
  {
    recordId: "PM02",
    studentId: "SV102",
    bookTitle: "Nhà Giả Kim",
    borrowDays: 16,
    isReturned: false,
  },
  {
    recordId: "PM03",
    studentId: "SV103",
    bookTitle: "Tuổi Thơ Dữ Dội",
    borrowDays: 20,
    isReturned: false,
  },
];

console.log("=== CREATE: THÊM PHIẾU MƯỢN PM04 ===");
borrowRecords.push({
  recordId: "PM04",
  studentId: "SV104",
  bookTitle: "Clean Code",
  borrowDays: 18,
  isReturned: false,
});
console.log("Đã thêm phiếu PM04 cho SV104.");

console.log("\n=== READ: TÍNH PHÍ PHẠT QUÁ HẠN ===");
let totalFines = 0;
for (let i = 0; i < borrowRecords.length; i++) {
  const record = borrowRecords[i];
  let fineAmount = 0;
  if (record.borrowDays > 14) {
    fineAmount = (record.borrowDays - 14) * 5000;
  }
  record.fineAmount = fineAmount;
  totalFines += fineAmount;
  console.log(
    `${record.recordId}: ${record.borrowDays} ngày, phí phạt ${fineAmount.toLocaleString("vi-VN")} VNĐ.`,
  );
}

console.log("\n=== UPDATE: CẬP NHẬT TRẠNG THÁI PM01 ===");
let updatedRecord = false;
for (let i = 0; i < borrowRecords.length; i++) {
  if (borrowRecords[i].recordId === "PM01") {
    borrowRecords[i].isReturned = true;
    updatedRecord = true;
    console.log("PM01 đã được đánh dấu là đã trả sách.");
    break;
  }
}
if (!updatedRecord) {
  console.log("Không tìm thấy phiếu PM01.");
}

console.log("\n=== DELETE: XÓA PHIẾU PM03 ĐÃ TẤT TOÁN ===");
let deletedRecord = false;
for (let i = 0; i < borrowRecords.length; i++) {
  if (borrowRecords[i].recordId === "PM03") {
    borrowRecords.splice(i, 1);
    deletedRecord = true;
    console.log("Đã xóa phiếu PM03.");
    break;
  }
}
if (!deletedRecord) {
  console.log("Không tìm thấy phiếu PM03.");
}

let activeBorrowings = 0;
for (let i = 0; i < borrowRecords.length; i++) {
  if (!borrowRecords[i].isReturned) {
    activeBorrowings++;
  }
}

const line = "+----------+------------+--------------------------+------------+------------+----------------------+";
console.log("\n=== BẢNG TỔNG KẾT PHIẾU MƯỢN ===");
console.log(line);
console.log(
  `| ${"Mã phiếu".padEnd(8)} | ${"Sinh viên".padEnd(10)} | ${"Tên sách".padEnd(24)} | ${"Số ngày".padEnd(10)} | ${"Đã trả".padEnd(10)} | ${"Phạt (VNĐ)".padEnd(20)} |`,
);
console.log(line);
for (let i = 0; i < borrowRecords.length; i++) {
  const record = borrowRecords[i];
  console.log(
    `| ${record.recordId.padEnd(8)} | ${record.studentId.padEnd(10)} | ${record.bookTitle.padEnd(24)} | ${String(record.borrowDays).padEnd(10)} | ${String(record.isReturned).padEnd(10)} | ${record.fineAmount.toLocaleString("vi-VN").padEnd(20)} |`,
  );
}
console.log(line);
console.log(`Số phiếu còn trong danh sách: ${borrowRecords.length}`);
console.log(`Số phiếu chưa trả            : ${activeBorrowings}`);
console.log(`Tổng phí phạt đã tính        : ${totalFines.toLocaleString("vi-VN")} VNĐ`);
