import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head"
interface defaultLayout {
    children: React.ReactNode;
}
  
const DefaultLayout:React.FC<defaultLayout> = ({children}) => {
    return (
        <div>
            <Head>
                <title>Thời tiết hôm nay - Weather App</title>
                <meta name="description" content="Tra cứu thông tin thời tiết các tỉnh thành trong nước và trên thế giới. Cập nhật nhanh chóng và chính xác." />
                <meta name="keywords" content="thời tiết, weather, tra cứu, nước ngoài, tỉnh thành" />
                <meta name="author" content="Weather App Team" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header></Header>
            <main>
                {children}
            </main>
            <Footer></Footer>
        </div>
    )
}

export default DefaultLayout