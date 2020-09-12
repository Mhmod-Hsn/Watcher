<template>
	<!-- inspired from https://codepen.io/tjorvens/pen/oxdbbg -->
	<article
		@click="goToVideo(item.id)"
		@mouseenter="initPlayer"
		@mouseleave="stopPlayer"
		class="card video-item br-10 pb-4"
		ref="card"
	>
		<div
			:style="{ backgroundImage: `url(${item.poster.formats.medium.url})` }"
			class="card__image cursor-pointer bg-image"
		></div>
		<div class="card__player">
			<div ref="player" v-show="playing"></div>
		</div>
		<div class="card__info">
			<h4 class="pl-2" v-if="item.adult">
				<b-badge class="small" pill variant="danger">+18</b-badge>
			</h4>
			<h2 class="title">{{item.name}}</h2>
			<p class="genre">
        <span v-for="(tag,index) in item.tags">
          <span v-if="index!==0">-</span>
          {{tag.name}}
        </span>
			</p>
			
			<div class="desc">
				<div class="rating">
					<p class="meta">
            <span class="stars mr-2">
              <i class="fas fa-star mr-1"></i>
              {{item.rate}}
            </span>
						● {{item.video_length}}
					</p>
				</div>
				<p>{{item.story.slice(0,150)}}</p>
			</div>
		</div>
	</article>
</template>

<script>
    export default {
        name: "VideoCard",
        props: {
            item: {
                required: true,
            },
        },
        data() {
            return {
                playing: false,
            };
        },
        mounted() {
            // this.initPlayer()
        },
        methods: {
            initPlayer() {
                this.stopPlayer();
                this.playing = true;

                let player = this.$refs.player;

                let link = `https://www.youtube.com/embed/${this.item.trailer}?autoplay=1`;
                let iframe = document.createElement("iframe");
                iframe.frameBorder = 0;
                iframe.width = "100%";
                iframe.height = "200px";
                iframe.id = `player-${this.item.id}`;
                iframe.setAttribute("allowfullscreen", "allowfullscreen");
                iframe.setAttribute("src", link);
                player.appendChild(iframe);
            },
            stopPlayer() {
                this.playing = false;
                this.$refs.player.innerHTML = "";
            },
            goToVideo(id) {
                alert(`go to video ${id}`);
            },
            like(id) {
                alert("not yet working");
                console.log(`like video ${id}`);
            },
        },
    };
</script>

<style lang="scss" scoped>
	$transition: all 0.3s ease;
	$cardWidth: 260px;
	$cardHeight: 380px;
	
	.card {
		width: $cardWidth;
		height: $cardHeight;
		background-color: white;
		overflow: hidden;
		position: relative;
		transition: $transition;
		transform: scale(0.95);
		box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.03);
	}
	
	.card__image {
		position: absolute;
		transition: $transition;
		
		&:before {
			content: "";
			position: absolute;
			width: 100%;
			height: 40%;
			bottom: 0;
			transition: $transition;
			background-image: linear-gradient(
					-180deg,
					rgba(0, 0, 0, 0) 0%,
					rgba(0, 0, 0, 0.8) 100%
			);
		}
	}
	
	.card__player {
		height: 200px;
		width: 100%;
		position: relative;
		pointer-events: none;
		overflow: hidden;
		transition: $transition;
		z-index: 2;
		
		#player {
			position: absolute;
			top: 35%;
			left: 50%;
			transform: translate(-50%, -50%) scale(1.2);
		}
	}
	
	.card__info {
		width: 100%;
		position: absolute;
		bottom: 0;
		transition: all 0.3s ease;
		color: white;
		transform: translateY(188px);
		
		.title {
			font-size: 30px;
			font-weight: bold;
			position: relative;
			padding-bottom: 0.4rem;
			padding-left: 10px;
			z-index: 200;
			transition: $transition;
			
			&:after {
				position: absolute;
				content: "";
				bottom: 0px;
				left: 10px;
				width: 60px;
				height: 3px;
				background: var(--primary);
				z-index: 100;
				transition: $transition;
			}
		}
		
		.genre {
			color: #b3b7b9;
			margin-top: 0.4rem;
			padding-left: 10px;
			font-size: 15px;
			transition: $transition;
		}
		
		.desc {
			background: white;
			margin-top: 10px;
			color: #78848e;
			padding: 20px 20px;
			font-size: 15px;
			transition: $transition;
			transform: translateY(20px);
			
			p {
				line-height: 1.3;
			}
		}
		
		.rating {
			display: flex;
			justify-content: space-between;
			
			.stars {
				color: var(--warning);
			}
			
			.meta {
				font-weight: 500;
				font-style: italic;
			}
		}
	}
	
	.card:hover {
		box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 12px 22px rgba(0, 0, 0, 0.15);
		transform: scale(1);
		
		.card__image {
			transform: translateY(-170px);
		}
		
		.card__info {
			transform: translateY(0);
		}
		
		.title {
			padding-bottom: 10px;
			transform: translateY(33px) translateX(10px);
			
			&:after {
				width: 85%;
				transform: translateX(-20px);
				transition-delay: 0.3s;
				transition: transform 0.3s ease, width 3s ease-in;
			}
		}
		
		.genre {
			opacity: 0;
		}
		
		.desc {
			transform: translateY(1px);
		}
	}
</style>
