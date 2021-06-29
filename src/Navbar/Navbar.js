import React from 'react'
import "./Navbar.css";
import './Logo/Name.svg';

function Navbar() {

    return (
        <>
            <div className="nav">
                {/* Nav toggle input */}
                <input type="checkbox" id="nav-check" />
                <div className="nav-header">
                    <div className="nav-title">
                    <svg width="218" height="77" viewBox="0 0 218 77" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.6667 52H33.3333V38.7647H46.6667V52H57.3333M22.6667 52H12V21.5588L68 7V52H57.3333M22.6667 52V32.1471L57.3333 24.2059V52" stroke="#E8840D" stroke-width="1.5"/>
<path d="M72.8 40L73.728 29.216H76.432L77.936 33.12C78.192 33.7707 78.4107 34.368 78.592 34.912C78.7733 35.456 78.8907 35.84 78.944 36.064L79.024 36.384C79.1947 35.68 79.568 34.592 80.144 33.12L81.664 29.216H84.368L85.488 40H83.024L82.624 35.824L82.416 32.672C82.1387 33.472 81.7547 34.5227 81.264 35.824L79.744 39.888H78.288L76.784 35.824C76.5387 35.1627 76.3307 34.5707 76.16 34.048C75.9893 33.5253 75.8773 33.1627 75.824 32.96L75.744 32.672C75.744 33.4293 75.696 34.48 75.6 35.824L75.264 40H72.8ZM92.2653 31.888H94.6013V40H92.2653V38.704C91.8386 39.6107 91.0173 40.064 89.8013 40.064C88.9693 40.064 88.3186 39.8347 87.8493 39.376C87.3906 38.9067 87.1613 38.2187 87.1613 37.312V31.888H89.4973V36.784C89.4973 37.7333 89.9133 38.208 90.7453 38.208C91.7586 38.208 92.2653 37.5307 92.2653 36.176V31.888ZM101.643 32.128V34.128C101.077 33.7973 100.416 33.632 99.6585 33.632C99.3812 33.632 99.1678 33.6907 99.0185 33.808C98.8692 33.9147 98.7945 34.0533 98.7945 34.224C98.7945 34.32 98.8212 34.4107 98.8745 34.496C98.9278 34.5813 99.0132 34.6613 99.1305 34.736C99.2585 34.8107 99.3758 34.88 99.4825 34.944C99.5998 34.9973 99.7545 35.0667 99.9465 35.152C100.149 35.2373 100.309 35.312 100.427 35.376C100.917 35.632 101.312 35.9307 101.611 36.272C101.909 36.6027 102.059 37.0293 102.059 37.552C102.059 38.352 101.771 38.9707 101.195 39.408C100.619 39.8453 99.8558 40.064 98.9065 40.064C97.9252 40.064 97.1038 39.8987 96.4425 39.568V37.488C97.1785 38 97.9572 38.256 98.7785 38.256C99.3652 38.256 99.6585 38.0693 99.6585 37.696C99.6585 37.6 99.6318 37.5093 99.5785 37.424C99.5252 37.3387 99.4345 37.2587 99.3065 37.184C99.1785 37.1093 99.0612 37.0507 98.9545 37.008C98.8478 36.9547 98.6932 36.8853 98.4905 36.8C98.2878 36.7147 98.1332 36.6453 98.0265 36.592C96.9492 36.08 96.4105 35.312 96.4105 34.288C96.4105 33.4987 96.7092 32.8853 97.3065 32.448C97.9145 32.0107 98.6665 31.792 99.5625 31.792C100.395 31.792 101.088 31.904 101.643 32.128ZM108.179 35.2V35.008C108.105 34.0587 107.689 33.584 106.931 33.584C106.558 33.584 106.227 33.7227 105.939 34C105.651 34.2667 105.459 34.6667 105.363 35.2H108.179ZM109.859 37.584V39.536C109.305 39.8987 108.457 40.08 107.315 40.08C105.982 40.08 104.942 39.696 104.195 38.928C103.459 38.1493 103.091 37.152 103.091 35.936C103.091 34.6453 103.449 33.6373 104.163 32.912C104.889 32.176 105.779 31.808 106.835 31.808C107.923 31.808 108.782 32.128 109.411 32.768C110.041 33.3973 110.355 34.3413 110.355 35.6C110.355 35.8453 110.313 36.2667 110.227 36.864H105.459C105.619 37.312 105.897 37.6587 106.291 37.904C106.686 38.1493 107.161 38.272 107.715 38.272C108.537 38.272 109.251 38.0427 109.859 37.584ZM117.047 31.888H119.383V40H117.047V38.704C116.62 39.6107 115.799 40.064 114.583 40.064C113.751 40.064 113.1 39.8347 112.631 39.376C112.172 38.9067 111.943 38.2187 111.943 37.312V31.888H114.279V36.784C114.279 37.7333 114.695 38.208 115.527 38.208C116.54 38.208 117.047 37.5307 117.047 36.176V31.888ZM123.64 31.888V33.152C124.088 32.256 124.85 31.808 125.928 31.808C127.069 31.808 127.826 32.32 128.2 33.344C128.381 32.864 128.685 32.4907 129.112 32.224C129.538 31.9467 130.04 31.808 130.616 31.808C131.416 31.808 132.045 32.064 132.504 32.576C132.973 33.0773 133.208 33.8187 133.208 34.8V40H130.872V35.184C130.872 34.7253 130.781 34.3627 130.6 34.096C130.418 33.8293 130.157 33.696 129.816 33.696C129.453 33.696 129.128 33.8453 128.84 34.144C128.562 34.432 128.424 34.9547 128.424 35.712V40H126.088V35.184C126.088 34.7253 125.997 34.3627 125.816 34.096C125.634 33.8293 125.373 33.696 125.032 33.696C124.669 33.696 124.344 33.8453 124.056 34.144C123.778 34.432 123.64 34.9547 123.64 35.712V40H121.304V31.888H123.64ZM141.614 38.032H145.838V40H139.134V29.216H145.774V31.184H141.614V33.632H145.326V35.584H141.614V38.032ZM152.237 35.952L154.941 40H152.397L151.037 37.568L149.581 40H147.053L149.949 35.936L147.229 31.888H149.821L151.133 34.304L152.589 31.888H155.149L152.237 35.952ZM160.339 38.144C160.851 38.144 161.267 37.952 161.587 37.568C161.907 37.1733 162.067 36.64 162.067 35.968C162.067 35.232 161.901 34.6773 161.571 34.304C161.251 33.92 160.84 33.728 160.339 33.728C159.848 33.728 159.421 33.9147 159.059 34.288C158.696 34.6613 158.515 35.184 158.515 35.856C158.515 36.5493 158.685 37.104 159.027 37.52C159.368 37.936 159.805 38.144 160.339 38.144ZM158.515 31.888V33.136C159.08 32.24 159.896 31.792 160.963 31.792C162.008 31.792 162.845 32.1653 163.475 32.912C164.115 33.648 164.435 34.6507 164.435 35.92C164.435 37.1253 164.125 38.1227 163.507 38.912C162.899 39.7013 162.051 40.096 160.963 40.096C159.864 40.096 159.048 39.664 158.515 38.8V42.992H156.179V31.888H158.515ZM170.648 35.2V35.008C170.573 34.0587 170.157 33.584 169.4 33.584C169.027 33.584 168.696 33.7227 168.408 34C168.12 34.2667 167.928 34.6667 167.832 35.2H170.648ZM172.328 37.584V39.536C171.773 39.8987 170.925 40.08 169.784 40.08C168.451 40.08 167.411 39.696 166.664 38.928C165.928 38.1493 165.56 37.152 165.56 35.936C165.56 34.6453 165.917 33.6373 166.632 32.912C167.357 32.176 168.248 31.808 169.304 31.808C170.392 31.808 171.251 32.128 171.88 32.768C172.509 33.3973 172.824 34.3413 172.824 35.6C172.824 35.8453 172.781 36.2667 172.696 36.864H167.928C168.088 37.312 168.365 37.6587 168.76 37.904C169.155 38.1493 169.629 38.272 170.184 38.272C171.005 38.272 171.72 38.0427 172.328 37.584ZM176.811 31.888V33.392C176.961 32.9227 177.206 32.5493 177.547 32.272C177.899 31.984 178.305 31.84 178.763 31.84C179.019 31.84 179.222 31.8613 179.371 31.904V34.112C179.115 33.9947 178.822 33.936 178.491 33.936C177.99 33.936 177.585 34.1227 177.275 34.496C176.966 34.8587 176.811 35.344 176.811 35.952V40H174.475L174.491 31.888H176.811ZM180.493 40V31.888H182.829V40H180.493ZM180.701 30.496C180.434 30.2293 180.301 29.9093 180.301 29.536C180.301 29.1627 180.434 28.8427 180.701 28.576C180.968 28.3093 181.288 28.176 181.661 28.176C182.034 28.176 182.354 28.3093 182.621 28.576C182.888 28.8427 183.021 29.1627 183.021 29.536C183.021 29.9093 182.888 30.2293 182.621 30.496C182.354 30.7627 182.034 30.896 181.661 30.896C181.288 30.896 180.968 30.7627 180.701 30.496ZM189.523 35.2V35.008C189.448 34.0587 189.032 33.584 188.275 33.584C187.902 33.584 187.571 33.7227 187.283 34C186.995 34.2667 186.803 34.6667 186.707 35.2H189.523ZM191.203 37.584V39.536C190.648 39.8987 189.8 40.08 188.659 40.08C187.326 40.08 186.286 39.696 185.539 38.928C184.803 38.1493 184.435 37.152 184.435 35.936C184.435 34.6453 184.792 33.6373 185.507 32.912C186.232 32.176 187.123 31.808 188.179 31.808C189.267 31.808 190.126 32.128 190.755 32.768C191.384 33.3973 191.699 34.3413 191.699 35.6C191.699 35.8453 191.656 36.2667 191.571 36.864H186.803C186.963 37.312 187.24 37.6587 187.635 37.904C188.03 38.1493 188.504 38.272 189.059 38.272C189.88 38.272 190.595 38.0427 191.203 37.584ZM195.702 31.888V33.264C195.905 32.816 196.214 32.464 196.63 32.208C197.057 31.9413 197.564 31.808 198.15 31.808C198.982 31.808 199.633 32.0587 200.102 32.56C200.572 33.0507 200.806 33.776 200.806 34.736V40H198.47V35.168C198.47 34.688 198.358 34.3253 198.134 34.08C197.91 33.824 197.596 33.696 197.19 33.696C196.764 33.696 196.406 33.8667 196.118 34.208C195.841 34.5387 195.702 35.04 195.702 35.712V40H193.366V31.888H195.702ZM204.616 35.968C204.658 36.6827 204.872 37.2373 205.256 37.632C205.64 38.0267 206.146 38.224 206.776 38.224C207.448 38.224 208.093 38.0373 208.712 37.664V39.616C208.082 39.9573 207.325 40.128 206.44 40.128C205.224 40.128 204.221 39.744 203.432 38.976C202.642 38.1973 202.248 37.1947 202.248 35.968C202.269 34.752 202.664 33.7493 203.432 32.96C204.2 32.16 205.25 31.76 206.584 31.76C207.405 31.76 208.114 31.9147 208.712 32.224V34.224C208.146 33.872 207.517 33.696 206.824 33.696C206.173 33.696 205.645 33.8933 205.24 34.288C204.834 34.672 204.626 35.232 204.616 35.968ZM214.836 35.2V35.008C214.761 34.0587 214.345 33.584 213.588 33.584C213.214 33.584 212.884 33.7227 212.596 34C212.308 34.2667 212.116 34.6667 212.02 35.2H214.836ZM216.516 37.584V39.536C215.961 39.8987 215.113 40.08 213.972 40.08C212.638 40.08 211.598 39.696 210.852 38.928C210.116 38.1493 209.748 37.152 209.748 35.936C209.748 34.6453 210.105 33.6373 210.82 32.912C211.545 32.176 212.436 31.808 213.492 31.808C214.58 31.808 215.438 32.128 216.068 32.768C216.697 33.3973 217.012 34.3413 217.012 35.6C217.012 35.8453 216.969 36.2667 216.884 36.864H212.116C212.276 37.312 212.553 37.6587 212.948 37.904C213.342 38.1493 213.817 38.272 214.372 38.272C215.193 38.272 215.908 38.0427 216.516 37.584Z" fill="#180126"/>
</svg>

                    </div>
                </div>

                {/* Nav toggle button */}
                <div className="nav-btn">
                    <label for="nav-check">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>
                
                {/* Nav links */}
                <div className="nav-links">
                    <a href="/">Home</a>
                    <a href="/exhibits">Exhibits</a>
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                    <a href="about us">About Us</a>
                </div>
            </div>
        </>
    )
}

export default Navbar
