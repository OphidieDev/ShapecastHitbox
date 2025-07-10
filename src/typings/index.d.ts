import * as Types from "./Types"
import { defaultSettings, Settings } from "./Settings";

export type Segment = Types.Segment;
export type CastData = Types.CastData;
export type Hitbox = Types.Hitbox;
export type UpdateCallback = Types.UpdateCallback;
export type HitCallback = Types.HitCallback;
export type StopCallback = Types.StopCallback;
export type AdornmentData = Types.AdornmentData;
export type SphereAdornmentData = Types.SphereAdornmentData;
export type BoxAdornmentData = Types.BoxAdornmentData;

interface ShapecastHitbox {
	new(instance?: Instance, raycastParams?: RaycastParams): Hitbox,
	Settings: typeof defaultSettings,
	CastTypes: {
		Raycast: "Raycast",
		Blockcast: "Blockcast",
		Spherecast: "Spherecast",
	}
}

declare const ShapecastHitbox: ShapecastHitbox

export default ShapecastHitbox