function ChoMi() {
    return "Đã cho mì";
}

function ChoGiaVi() {
    return "Đã cho Gia Vị";
}

function ChoRau() {
    return "Đã cho Rau";
}

function ChoTrung() {
    return "Đã cho Trứng";
}

async function NauMi() {
    let a = await ChoMi();
    console.log(a);
    let b = await ChoGiaVi();
    console.log(b);
    let c = await ChoRau();
    console.log(c);
    let d = await ChoTrung();
    console.log(d);

    console.log(a + b + c + d);
}

NauMi();