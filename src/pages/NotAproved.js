import { Article } from "components/Article/Article.styled"
import { MainTitle } from "components/DefoultStyledComponetns/DefoultStyledComponetns"
import { HomeLogoLink } from "components/HomeLogoLink/HomeLogoLink"

export const NotAproved = () => {
    return (
        <div>
            <HomeLogoLink />
            <MainTitle>Запит в обробці</MainTitle>
            <Article>Ваш запит взято в роботу, Ви зможете продовжити використання системи одразу після схвалення</Article>
        </div>
    )
}