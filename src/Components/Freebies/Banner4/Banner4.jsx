import smimage from "../../../Assets/Freebies/UntamedFreebie.png";
import "./Banner4.css";

export default function Banner4() {
  return (
    <>
      <div className="freebies4">
        <div className="freebies-image4">
          <img src={smimage} alt="" />
        </div>
        <div className="freebies-copy4">
          <p className="copy-title4">
            <span style={{ color: "darkseagreen" }}>03 FREEBIE</span>
          </p>
          <h3 className="copy-header4">Untamed</h3>
          <p className="freebies-copy-text4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            quae inventore ad ex molestias ab temporibus? Nisi error temporibus
            doloremque consequatur amet nemo exercitationem. Quae consectetur
            necessitatibus illum sequi id?
          </p>
          <p className="freebies-copy-text4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            quae inventore ad ex molestias ab temporibus? Nisi error temporibus
            doloremque consequatur amet nemo exercitationem. Quae consectetur
            necessitatibus illum sequi id?
          </p>
          <div className="freebie-container4">
            <script src="https://f.convertkit.com/ckjs/ck.5.js" />
            <form
              action="https://app.convertkit.com/forms/7149122/subscriptions"
              method="post"
              data-sv-form="7149122"
              data-uid="e37b1a4cd2"
              data-format="inline"
              data-version="5"
              data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":""},"analytics":{"google":null,"fathom":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":true,"url":"https://convertkit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic"},"recaptcha":{"enabled":false},"return_visitor":{"action":"custom_content","custom_content":"Thanks for checking out the Rock Solid Core Guide."},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
              min-width="400 500 600 700 800"
            >
              <div data-style="clean">
                <ul data-element="errors" data-group="alert"></ul>
                <div data-element="fields" data-stacked="false">
                  <div>
                    <input
                      className="input-field"
                      aria-label="First Name"
                      name="fields[first_name]"
                      placeholder="First Name"
                      type="text"
                    />
                  </div>
                  <div>
                    <input
                      className="input-field"
                      name="email_address"
                      aria-label="Email Address"
                      placeholder="Email Address"
                      required=""
                      type="email"
                    />
                  </div>
                  <button className="button-field" data-element="submit">
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <span>Submit</span>
                  </button>
                </div>
                <div></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
