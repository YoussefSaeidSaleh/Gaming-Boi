import GridContainer from "../components/defaults/GridContainer";
import SideBar from "../components/nav/SideBar";
import NavBar from "../components/nav/NavBar";
import MaxWidthWrapper from "../components/defaults/MaxWidthWrapper";
import ButtonGradient from "../components/ButtonGradient";
import {WishlistProvider} from "../context/wishlistContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <WishlistProvider>
      <main className=" background grid min-h-screen h-full">
        <ButtonGradient />
        <GridContainer cols={12}>
          <SideBar />
          <MaxWidthWrapper className="  col-span-full lg:col-span-10">
            <NavBar />
            {children}
          </MaxWidthWrapper>
        </GridContainer>
      </main>
    </WishlistProvider>
  );
}
