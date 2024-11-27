/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../../index";
import * as OpikApi from "../../../../../api/index";
import * as core from "../../../../../core";
import { JsonNodeWrite } from "../../../../types/JsonNodeWrite";
import { PromptVersionLinkWrite } from "../../../../types/PromptVersionLinkWrite";
export declare const ExperimentWrite: core.serialization.Schema<serializers.ExperimentWrite.Raw, OpikApi.ExperimentWrite>;
export declare namespace ExperimentWrite {
    interface Raw {
        id?: string | null;
        dataset_name: string;
        name?: string | null;
        metadata?: JsonNodeWrite.Raw | null;
        prompt_version?: PromptVersionLinkWrite.Raw | null;
    }
}