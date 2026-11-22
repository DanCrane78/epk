# Free song mailing list with Kit

The sign-up box is already built into the EPK. It stays hidden until you add your Kit form number to `content.js`. These steps take about 20 minutes. Kit moves menus around now and then, so names may differ slightly.

## 1. Make the Kit account
1. Go to **kit.com** and sign up for the **free plan**.
2. Fill in your **sender details**: the name people will see (e.g. "Dan Crane") and a **postal address**. Every marketing email has to include an address by law; a PO box or business address is fine. Kit's help pages also explain how to avoid showing your home address.

## 2. Make the form
1. Go to **Grow → Landing Pages & Forms → Create new → Form**.
2. Choose **Inline**, and pick any template. Its look doesn't matter, because the EPK uses its own design.
3. Click the gear for the form's **Settings**:
   - **Incentive**: turn on **"Send incentive email"**. This is the confirmation email that delivers the song.
   - **Download**: upload the song (an MP3 is easiest for fans; a WAV is also fine). Kit sends people the file once they confirm.
   - **After subscribing**: choose **Show a success message** and write something like "Check your inbox. The song is on its way."
4. **Save**.

## 3. Find the form number
With the form open, look at the web address in your browser:

```
https://app.kit.com/forms/1234567/edit
```

The number (here `1234567`) is your **form ID**. Send it to me, or put it in `content.js`:

```js
signup: {
  kitFormId: "1234567",
  ...
```

Once that's on `main`, the brick-coloured "a free song." box appears above the contact section.

## 4. The confirmation email (it delivers the song)
In the form's **Incentive** settings, edit the email:

**Subject:** one click and the song's yours

**Body:**

> Hi {{ subscriber.first_name | default: "there" }},
>
> Thanks for signing up. Click below to confirm and the song downloads straight away.
>
> [Confirm and get the song]
>
> It's [SONG NAME], and it isn't anywhere else. Best with headphones, sitting down.
>
> After this you'll only hear from me when there's something worth hearing: new music first, and the occasional show. The next big one is my album stay home., out 2 February 2027.
>
> Dan

## 5. Optional: a welcome email a day later
Go to **Send → Sequences → New sequence** and add one email, sent 1 day after joining:

**Subject:** the story behind [SONG NAME]

> Hi {{ subscriber.first_name | default: "there" }},
>
> Hope the song found you somewhere quiet.
>
> A bit about where it came from: [two or three lines: when you wrote it, who's on it, why it didn't make an album].
>
> If you'd like more, Music To Sit Down To is on Spotify and Bandcamp: [link]. And stay home. is out on 2 February 2027. I'll tell you first.
>
> Dan

Then go to **Automate → Visual Automations**, set "Joins form" to the sequence, and turn it on.

## 6. Before you go live
- **Test it yourself**: sign up with your own email, confirm, and check that the song arrives and plays.
- **The song:** make sure you own or control it. If a collaborator is on it (O.S.T.R., Observer, Lady Paradox), get their OK first.
- **Spread the link**: Instagram bio, Linktree, YouTube descriptions and Bandcamp. You can link straight to the box: `https://dancrane78.github.io/epk/#free-song`

## Changing the words on the site
Everything in the box (heading, text, button) is in `content.js` under `signup`. Set `askName: false` to remove the first-name field.
