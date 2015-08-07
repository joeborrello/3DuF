var Registry = require("../../core/registry");
var PaperPrimitives = require("../paperPrimitives");
var HollowChannel = require("../../core/features").HollowChannel;
var Colors = require("../colors");

class HollowChannelRenderer{
    static renderFeature(hollowChannel){
        let start = hollowChannel.params.getValue("start");
        let end = hollowChannel.params.getValue("end");
        let width;
        try {
            width = hollowChannel.params.getValue("width");
        } catch (err) {
            width = HollowChannel.getDefaultValues()["width"];
        }
        let rec = PaperPrimitives.RoundedRect(start, end, width);
        rec.featureID = hollowChannel.id;
        rec.fillColor = Colors.GREY_700;
        return rec;
    }

    static renderTarget(position){
        let width = HollowChannel.getDefaultValues()["width"];
        let circ = PaperPrimitives.CircleTarget(position, width/2);
        return circ;
    }
}

module.exports = HollowChannelRenderer;