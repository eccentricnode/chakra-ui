import { Container } from "@chakra-ui/react";
import Navbar from "../components/navbar";

export default function Layout({children} : {children: any}) {
    return(
        <div>
            <Navbar />
            <main>{children}</main>
        </div>
    )
}