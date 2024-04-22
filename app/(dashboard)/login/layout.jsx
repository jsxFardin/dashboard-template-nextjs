import Header from "@/components/Header";

export default function layout({ children }) {
    return (

        <div className=" w-full min-h-screen">
            <Header pageName="Login" />
            {children}
        </div>

    );
}

