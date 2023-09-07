import { Link, useLocation } from "react-router-dom"
import useProgress from "../../hooks/useProgress"
import { CircularProgressbarContainer, ContentProgressbar, Footer, StyledLink } from "./styled"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import { pathsWithoutHeaderAndMenu } from "../../App"
import "react-circular-progressbar/dist/styles.css"

export default function FooterMenu() {

    const { progress } = useProgress()
    const location = useLocation()

    if (pathsWithoutHeaderAndMenu.includes(location.pathname)) {
        return null;
    }

    return (
        <Footer data-test="menu">
            <StyledLink data-test="habit-link" to={"/habitos"}> Hábitos </StyledLink>

            <ContentProgressbar>
                <CircularProgressbarContainer>
                    <Link data-test="today-link" to={"/hoje"}>
                        <CircularProgressbar
                            value={progress}
                            text={"Hoje"}
                            background
                            backgroundPadding={6}
                            styles={buildStyles({
                                backgroundColor: "#3e98c7",
                                textColor: "#fff",
                                pathColor: "#fff",
                                trailColor: "transparent"
                            })}
                        />
                    </Link>
                </CircularProgressbarContainer>
            </ContentProgressbar>
            <StyledLink to="/historic">Histórico</StyledLink>
        </Footer>
    )
}