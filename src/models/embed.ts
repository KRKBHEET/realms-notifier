import { ProgramAccount, Proposal } from "@solana/spl-governance";
import { EmbedBuilder } from "discord.js";
import { ProposalType } from "../types/types";

export const ProposalEmbedFactory = (
  proposal: ProgramAccount<Proposal>,
  REALM: string,
  ProposalType
) => {
  // return opening embed if proposal just opened type.
  if (ProposalType.ProposalJustOpen) {
    const ProposalOpeningEmbed = new EmbedBuilder()
      .setColor(0xaa8ed6)
      .setTitle(`${proposal.account.name}`)
      .setURL(
        `https://realms.today/dao/${escape(
          REALM
        )}/proposal/${proposal.pubkey.toBase58()}`
      )
      .setAuthor({
        name: "Realms Notifier",
        iconURL:
          "https://raw.githubusercontent.com/krk-finance/cdn.krk.finance/main/img/misc/dl.png",
        url: `https://realms.today/dao/${escape(
          REALM
        )}/proposal/${proposal.pubkey.toBase58()}`,
      })
      .setDescription(
        `<@&963322631568891926> [“${
          proposal.account.name
        }” proposal just opened for voting 🗳](https://realms.today/dao/${escape(
          REALM
        )}/proposal/${proposal.pubkey.toBase58()})`
      )
      .setThumbnail(
        "https://raw.githubusercontent.com/krk-finance/cdn.krk.finance/main/img/misc/dl.png"
      )
      .setTimestamp()
      .setFooter({
        text: "Realms Notifier",
        iconURL:
          "https://raw.githubusercontent.com/krk-finance/cdn.krk.finance/main/img/misc/dl.png",
      });
    return ProposalOpeningEmbed;
    // Return closing embed if proposal is closing type.
  } else if (ProposalType.ProposalClosing) {
    const ProposalClosingEmbed = new EmbedBuilder()
      .setColor(0xaa8ed6)
      .setTitle(`${proposal.account.name}`)
      .setURL("https://discord.js.org/")
      .setAuthor({
        name: "Realms Notifier",
        iconURL:
          "https://raw.githubusercontent.com/krk-finance/cdn.krk.finance/main/img/misc/dl.png",
        url: `https://realms.today/dao/${escape(
          REALM
        )}/proposal/${proposal.pubkey.toBase58()}`,
      })
      .setDescription(
        `[“${
          proposal.account.name
        }”proposal will close for voting 🗳 in 24 hrs](https://realms.today/dao/${escape(
          REALM
        )}/proposal/${proposal.pubkey.toBase58()})`
      )
      .setThumbnail(
        "https://raw.githubusercontent.com/krk-finance/cdn.krk.finance/main/img/misc/dl.png"
      )
      .setTimestamp()
      .setFooter({
        text: "Realms Notifier",
        iconURL:
          "https://raw.githubusercontent.com/krk-finance/cdn.krk.finance/main/img/misc/dl.png",
      });

    return ProposalClosingEmbed;
  }
};
