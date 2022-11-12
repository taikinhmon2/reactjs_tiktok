import Header from "../header";
function DefaulLayout({ children }) {
    return (
        <>
            <Header />
            <div className="content">
                {children}
            </div>
        </>
    );
}

export default DefaulLayout;