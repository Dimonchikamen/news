import { useEffect, useRef, useState } from 'react';
import news_svg from "./svg/News.svg";
import themes_svg from "./svg/Themes.svg";
import { TabPane, TabContent, TabContainer, Col, Nav } from 'react-bootstrap';
import './App.scss';
import News from './pages/news/News';

enum Header {
    news = "Новости",
    themes = "Темы"
}

function App() {
    const [key, setKey] = useState<string | null>("news");
    const [header, setHeader] = useState<string>(Header.news);
    const content = useRef<HTMLDivElement | null>(null);


    const changeKey = (newKey: string | null) => {
        setKey(newKey);
        //@ts-ignore
        setHeader(Header[newKey]);
    }

    return (
        <>
            <header className="header">{header}</header>
            <TabContainer activeKey={key!} onSelect={changeKey}>
                <TabContent className="content-container" ref={content}>
                    <TabPane eventKey="news">
                        <News />
                    </TabPane>
                    <TabPane eventKey="themes">
                        <h1>THEMES</h1>
                    </TabPane>
                </TabContent>
                <Nav className="navigation-bar" variant="pills">
                    <Col>
                        <Nav.Item>
                            <Nav.Link eventKey="news" bsPrefix="tab-link">
                                <img src={news_svg} alt="News" />
                            </Nav.Link>
                        </Nav.Item>
                    </Col>
                    <Col>
                        <Nav.Item>
                            <Nav.Link eventKey="themes" bsPrefix="tab-link">
                                <img src={themes_svg} alt="Themes" />
                            </Nav.Link>
                        </Nav.Item>
                    </Col>
                </Nav>
            </TabContainer>
        </>
    );
}

export default App;
