
export function insertOrder(payload) {
    const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10ZWxreGF0Z2NpaXVmZ2N3cHVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTg5MDIsImV4cCI6MTk4MjE3NDkwMn0.QqoNr6Lnqi2_doGv_CKPNFRmHwdRUnJAHsc9UdICY8s';
    const url = 'https://mtelkxatgciiufgcwpui.supabase.co';

    fetch(url + "/rest/v1/simpleshop", {
        method: 'POST',
        headers: {
            apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10ZWxreGF0Z2NpaXVmZ2N3cHVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTg5MDIsImV4cCI6MTk4MjE3NDkwMn0.QqoNr6Lnqi2_doGv_CKPNFRmHwdRUnJAHsc9UdICY8s',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    })
        .then()
        .then();
}