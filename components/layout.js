import Header from "./header";
import Footer from "./footer";
import {useRouter} from 'next/router'

export default function Layout(props) {
  const router = useRouter()
  let background = ''
  if (router.route) {
    if (String(router.route).indexOf('account') !== -1) {
      background = ' bg-gray-100'
    }
  }

  return (
      <div className={"flex flex-col min-h-screen justify-between" + background}>
        <Header/>

        <main>
          {props.children}
        </main>

        <Footer/>
      </div>
  );
}
