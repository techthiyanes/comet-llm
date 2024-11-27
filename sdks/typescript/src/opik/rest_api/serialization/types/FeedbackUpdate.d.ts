/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as core from "../../core";
import * as serializers from "../index";
import * as OpikApi from "../../api/index";
import { NumericalFeedbackDefinitionUpdate } from "./NumericalFeedbackDefinitionUpdate";
import { CategoricalFeedbackDefinitionUpdate } from "./CategoricalFeedbackDefinitionUpdate";
export declare const FeedbackUpdate: core.serialization.Schema<serializers.FeedbackUpdate.Raw, OpikApi.FeedbackUpdate>;
export declare namespace FeedbackUpdate {
    type Raw = FeedbackUpdate.Numerical | FeedbackUpdate.Categorical;
    interface Numerical extends _Base, NumericalFeedbackDefinitionUpdate.Raw {
        type: "numerical";
    }
    interface Categorical extends _Base, CategoricalFeedbackDefinitionUpdate.Raw {
        type: "categorical";
    }
    interface _Base {
        id?: string | null;
        name: string;
    }
}