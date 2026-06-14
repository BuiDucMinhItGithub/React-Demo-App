import { useEffect, useState } from "react";

export function InputText() {
    const [name] = useState('');
    const [email] = useState('');
    useEffect(() => {
        return () => {}
    }, [name]);

    useEffect(() => {}, [name, email]);
    // Neu khong de [] thi moi lan render se goi useEffect, 
    // con de [] thi chi goi 1 lan khi component duoc mount va 1 lan khi component duoc unmount
    // [] rong thi se goi useEffect moi lan render, va goi cleanup moi lan unmount


    // useMemo(() => {
    //     return name + email;
    // }, [name, email])
    
    // Tính toán lại giá trị chỉ khi name hoặc email thay đổi, nếu không có [] thì sẽ tính toán lại mỗi lần render, nếu [] rong thì sẽ tính toán lại mỗi lần render
    // const logValues = useCallback(() => {
    //     console.log(name, email);
    // }, [name, email])
    // muon thay doi cha nhung khong thay doi con thi dung useCallback de bao ve con, chi thay doi khi name hoac email thay doi

    // useRef(() => {
    //     console.log('InputText rendered');
    // })
    // tac dong den 1 element truc tiep trong 1 DOM hoac de luu tru 1 gia tri ma khong can render lai component khi gia tri do thay doi

    // useTransaction(() => {
    //     // code can thuc hien trong transaction
    // }, [name, email])
    // useTransaction tuong tu useEffect nhung no se gom nhom cac cap nhat lai voi nhau va thuc hien chung 1 lan khi transaction ket thuc, thay vi thuc hien moi cap nhat mot lan nhu useEffect, dieu nay co the giup nang cao hieu suat khi co nhieu cap nhat lien quan den nhau
   return (
        <input type="text" placeholder="Enter text" />
    )
}  

