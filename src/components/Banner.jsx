import BannerLogo from "../assets/banner-main.png"
import PropTypes from 'prop-types'

const Banner = ({handelFreeCredit}) => {
    return (
        <div className="w-11/12 bg-no-repeat bg-cover h-full mx-auto rounded-2xl py-16 flex flex-col items-center justify-center mb-[100px]" style={{ background: "url(https://i.postimg.cc/3w64jNvT/bg-shadow.png), #131313" }}>
            <img src={BannerLogo} alt="" />
            <h1 className="text-[2.5rem] text-white font-bold text-center mt-6">Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className="mt-4 text-2xl font-semibold text-white/70">Beyond Boundaries Beyond Limits</p>
            <button onClick={handelFreeCredit} className="text-color-primary font-bold py-[14px] px-5 bg-gradient-to-r from-[#d38abd] to-[#f2c357] rounded-xl mt-8">Claim Free Credit</button>
        </div>
    );
};

Banner.propTypes = {
    handelFreeCredit: PropTypes.func.isRequired
}
export default Banner;