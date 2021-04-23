import { Container, Divider } from "@material-ui/core";

function Footer() {
  return (
    <div style={{ backgroundColor: "#e9e9e9", marginTop: "20px" }}>
      <Container>
        <div style={{ paddingTop: "10px" }}>
          <h4>
            Hey there, I am Sushil & this is the small project created by me to
            make your github profiles & website <em>Awesome</em>
          </h4>
        </div>
        <div style={{ marginTop: "10px" }}>
          <h3>Format</h3>
          <Divider style={{ margin: "5px 0 5px 0" }} />
          <code style={{ backgroundColor: "#c7c7c7" }}>
            https://img.shields.io/badge/(LABEL)-(COLOR)?style=(TYPE)&logo=(LOGO)&logoColor=(LOGO_COLOR)&logoWidth=(LOGO_WIDTH)&labelColor=(LABEL_COLOR)
          </code>
          <ul>
            <li>
              <strong>(LABEL)</strong> - Label of your badge (Can be any)
            </li>
            <li>
              <strong>(COLOR)</strong> - rgb, rgba, hsl, hsla and hex without
              '#' eg 512BD4
            </li>
            <li>
              <strong>(TYPE)</strong> - 'plastic' || 'flat' || 'flat-square' ||
              'for-the-badge' || 'social'
            </li>
            <li>
              <strong>(LOGO)</strong> - Click on tile of the brand and whole img
              tag with appropriate information will be copied to your clipboard
              along with logo and brand color.{" "}
              <a href="https://simpleicons.org/">Simple Icon</a>
            </li>
            <li>
              <strong>(LOGO_COLOR)</strong> - rgb, rgba, hsl, hsla and hex
              without '#' eg 512BD4
            </li>
            <li>
              <strong>(LOGO_WIDTH)</strong> - number eg '30'
            </li>
            <li>
              <strong>(LABEL_COLOR)</strong> - rgb, rgba, hsl, hsla and hex
              without '#' eg 512BD4
            </li>
          </ul>
        </div>
        <div style={{ marginTop: "10px" }}>
          <h3>Limitations</h3>
          <Divider style={{ margin: "5px 0 5px 0" }} />
          <ul>
            <li>
              Note that some icons might not visible, So you can play with LOGO
              part try to make it in slug form (Almost 95% are visible)
            </li>
            <li>
              LOGO_COLOR and LABEL_COLOR if not visible properly then change
              them
            </li>
          </ul>
        </div>
        <div style={{ marginTop: "10px" }}>
          <h3>Reference</h3>
          <Divider style={{ margin: "5px 0 5px 0" }} />
          <ul>
            <li>
              <a
                href="https://simpleicons.org/"
                rel="noreferrer"
                target="_blank"
              >
                Simple Icon
              </a>
            </li>
            <li>
              <a href="https://shields.io/" rel="noreferrer" target="_blank">
                Shields IO
              </a>
            </li>
          </ul>
        </div>
      </Container>
      <footer
        style={{
          backgroundColor: "#b9b9b9",
          textAlign: "center",
          marginTop: "20px"
        }}
      >
        Created by ♥️ and react -{" "}
        <a
          href="https://www.sushilkamble.live/"
          rel="noreferrer"
          target="_blank"
        >
          sushilkamble.live
        </a>{" "}
        -{" "}
        <a
          href="https://github.com/sushil-kamble"
          rel="noreferrer"
          target="_blank"
        >
          Github
        </a>
      </footer>
    </div>
  );
}

export default Footer;
