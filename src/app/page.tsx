import Sistema from "@/components/Sistema";
import { list } from "@/data/list";

function Page() {

    const appStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
    };

    const titleStyle: React.CSSProperties = {
        fontSize: 18,
        padding: 25
    };

    return(
        <div style={appStyle}>
            <h1 className="App" style={titleStyle}>Explorador de Arquivos</h1>
            {list && (
                <>
                    <Sistema diretorio={list}/>
                </>
            )}
        </div>
    );
}

export default Page;