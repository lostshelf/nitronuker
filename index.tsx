/*
 * Vencord, a Discord client mod
 * Copyright (c) 2025 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import definePlugin from "@utils/types";

export default definePlugin({
    name: "Nitro Nuker",
    description: "Removes all traces of Discord Nitro from Discord",
    authors: [{ name: "lostshelf", id: 1n }],
    patches: [
        {
            find: "",
            replacement: {
                match: /[*]/,
                replace: () => {
                    return "balls";
                },
            },
        },
    ],
});
