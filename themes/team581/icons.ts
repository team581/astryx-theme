import type { IconName } from '@astryxdesign/core/Icon';
import { type ReactNode, createElement } from 'react';
import type { LucideIcon } from 'lucide-react';
import ArrowDownIcon from 'lucide-react/icons/arrow-down';
import ArrowUpIcon from 'lucide-react/icons/arrow-up';
import ArrowUpDownIcon from 'lucide-react/icons/arrow-up-down';
import CalendarIcon from 'lucide-react/icons/calendar';
import CheckIcon from 'lucide-react/icons/check';
import CheckCheckIcon from 'lucide-react/icons/check-check';
import ChevronDownIcon from 'lucide-react/icons/chevron-down';
import ChevronLeftIcon from 'lucide-react/icons/chevron-left';
import ChevronRightIcon from 'lucide-react/icons/chevron-right';
import ChevronsLeftIcon from 'lucide-react/icons/chevrons-left';
import ChevronsRightIcon from 'lucide-react/icons/chevrons-right';
import CircleCheckIcon from 'lucide-react/icons/circle-check';
import CircleXIcon from 'lucide-react/icons/circle-x';
import ClockIcon from 'lucide-react/icons/clock';
import Columns3Icon from 'lucide-react/icons/columns-3';
import CopyIcon from 'lucide-react/icons/copy';
import EllipsisIcon from 'lucide-react/icons/ellipsis';
import ExternalLinkIcon from 'lucide-react/icons/external-link';
import EyeOffIcon from 'lucide-react/icons/eye-off';
import FunnelIcon from 'lucide-react/icons/funnel';
import InfoIcon from 'lucide-react/icons/info';
import MenuIcon from 'lucide-react/icons/menu';
import MicIcon from 'lucide-react/icons/mic';
import SearchIcon from 'lucide-react/icons/search';
import SquareIcon from 'lucide-react/icons/square';
import TriangleAlertIcon from 'lucide-react/icons/triangle-alert';
import UploadIcon from 'lucide-react/icons/upload';
import WrenchIcon from 'lucide-react/icons/wrench';
import XIcon from 'lucide-react/icons/x';

const icon = (Icon: LucideIcon) => createElement(Icon, { size: '1em', 'aria-hidden': true });

/** Astryx's semantic icons drawn with Lucide, so they match the rest of an app's icons */
export const team581Icons: Record<IconName, ReactNode> = {
	close: icon(XIcon),
	chevronDown: icon(ChevronDownIcon),
	chevronLeft: icon(ChevronLeftIcon),
	chevronRight: icon(ChevronRightIcon),
	chevronsLeft: icon(ChevronsLeftIcon),
	chevronsRight: icon(ChevronsRightIcon),
	check: icon(CheckIcon),
	success: icon(CircleCheckIcon),
	error: icon(CircleXIcon),
	warning: icon(TriangleAlertIcon),
	info: icon(InfoIcon),
	calendar: icon(CalendarIcon),
	clock: icon(ClockIcon),
	externalLink: icon(ExternalLinkIcon),
	menu: icon(MenuIcon),
	moreHorizontal: icon(EllipsisIcon),
	search: icon(SearchIcon),
	upload: icon(UploadIcon),
	arrowUp: icon(ArrowUpIcon),
	arrowDown: icon(ArrowDownIcon),
	arrowsUpDown: icon(ArrowUpDownIcon),
	funnel: icon(FunnelIcon),
	eyeSlash: icon(EyeOffIcon),
	viewColumns: icon(Columns3Icon),
	copy: icon(CopyIcon),
	checkDouble: icon(CheckCheckIcon),
	wrench: icon(WrenchIcon),
	stop: icon(SquareIcon),
	microphone: icon(MicIcon),
};
