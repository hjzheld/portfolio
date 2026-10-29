import styled from "styled-components";
import GraLine from "@/components/common/GradationLine";
import {FooterLogo} from '../header/Logo';


import emailSvg from "@/assets/images/common/email.svg";
// import phoneSvg from "@/assets/images/common/phone.svg";

const FooterWrapper = styled.footer`
    width: 100%;
    padding: 1rem clamp(1rem,4vw,2rem);
`;

const FooterContent = styled.div`
    width: 100%;
    max-width:1200px;
    min-width:0;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 1rem;
    padding: 50px 0;
    margin: 0 auto;
`;

const FooterIcon = styled.div`
    display: flex;
    align-items: center;
    gap: .75rem;
    min-width:0;
    a { color:var(--ink); overflow-wrap:anywhere; font-size:.9rem; }
    a:hover { text-decoration:underline; text-underline-offset:4px; }
    
    img {
        width: 36px;
        height: auto;
    }
`

const Footer = () => {


    return ( 
        <FooterWrapper>
            <GraLine />
            <FooterContent>
            <FooterLogo />
                <FooterIcon>
                    <img src={emailSvg} alt="" aria-hidden="true" loading="lazy" />
                   <a href="mailto:dusen380@gmail.com">dusen380@gmail.com</a>
                </FooterIcon>
                </FooterContent>
            
        </FooterWrapper>
    );
}

export default Footer;