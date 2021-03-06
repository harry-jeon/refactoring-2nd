function printOwing(invoice) {
    printBanner();
    const outstanding = calculateOutstanding(invoice);
    recordDueDate(invoice);
    printDetails(invoice, outstanding);

    function printDetails(invoice, outstanding) {
        // 세부 사항을 출력한다.
        console.log(`고객명: ${invoice.customer}`);
        console.log(`채무액: ${outstanding}`);
        console.log(`마감일: ${invoice.dueDate.toLocaleDateString()}`)
    }
    function printBanner() {
        console.log("******************");
        console.log("******************");
        console.log("*****고객 채무******");
    }
    function recordDueDate(invoice) {
        // 마감일을 기록한다.
        const today = Clock.today;
        invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
    }
    function calculateOutstanding(invoice) {
        let result = 0;
        // 미해결 채무를 계산한다.
        for (const o of invoice.orders) {
            result += o.amount;
        }
        return result;
    }
}
