/**
 * https://portal.clarifai.com/settings/profile
 */
export const USER_ID = "iuliangradinaru79"; // Add your user id here

/**
 * https://portal.clarifai.com/settings/authentication (create one if necessary!)
 */
export const PAT = "5866d7ab3aab4f1bb845070d958384a6"; // Add your personal access token here

/**
 * App Id is just the name of your app on the portal.
 */
export const APP_ID = "my-first-application"; // Add your app id here

/**
 * Change these to whatever model and image input you want to use
 * https://help.clarifai.com/hc/en-us/articles/1500007677141-Where-to-find-your-Model-IDs-and-Model-Version-IDs
 */
export const MODEL_ID = "face-detection";
export const MODEL_VERSION_ID = "45fb9a671625463fa646c3523a3087d5";

/**
 * This is the URL for the Clarifai API
 */
export const CLARIFAI_URL =
  "https://api.clarifai.com/v2/models/" +
  MODEL_ID +
  "/versions/" +
  MODEL_VERSION_ID +
  "/outputs";
