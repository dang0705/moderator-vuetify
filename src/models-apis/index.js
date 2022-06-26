import commonApis from "models/common";
import post from "models/modules/post";
import reply from "models/modules/reply";
import mutedUsers from "models/modules/muted";

export default Object.assign({}, commonApis, post, reply, mutedUsers);
