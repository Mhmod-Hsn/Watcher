<template>
	<LoadingCard v-if="!item" />
	<div
		id="single-video"
		class="container py-lg-5 py-md-3 py-2"
		v-else>
		
		<div class="row">
			<div class="col-md-4 col-sm-6">
				<b-aspect
					tag="div"
					class="position-relative br-10 bg-image poster shadow border"
					aspect="2:3"
					:style="{ backgroundImage: `url(${item.poster.formats.medium.url})` }"
				>
				</b-aspect>
			</div>
			<div class="col-md-8 col-sm-6">
				<div class="card bg-l-gray br-10 h-100">
					<div class="card-body">
						<div class="d-flex justify-content-between  h5 mb-3 ">
							<div class="d-flex justify-content-between">
								<b-badge pill variant="warning">
									<i class="far fa-star mr-2"></i>
									{{item.rate}}
								</b-badge>
								
								<b-badge pill variant="primary" class="ml-2">
									{{item.release_year}}
								</b-badge>
								
								<b-badge pill variant="secondary" class="ml-2">
									{{item.category.name}}
								</b-badge>
								
								<b-badge pill variant="success" class="ml-2">
									<i class="far fa-eye"></i>
									{{item.watch_count}}
								</b-badge>
							</div>
							
							<b-badge pill variant="danger" v-if="item.adult">
								<i class="far fa-exclamation-triangle"></i>
								+18
							</b-badge>
								
						</div>
						
						<h2 class="name">{{item.name}}</h2>
						
						<div class="row">
							<div class="col-6">
								Tags:
								<div class="tags">
									<b-badge v-for="tag in item.tags" pill variant="secondary" class="mb-1 mr-2">
										{{tag.name}}
									</b-badge>
								</div>
							</div>
							<div class="col-6">
								Actors:
								<div class="tags">
									<b-badge v-for="actor in item.actors" pill variant="secondary" class="mb-1 mr-2">
										{{actor.name}}
									</b-badge>
								</div>
							</div>
						</div>
						
						<p class="story">{{item.story}}</p>
						
						<b-button
							variant="danger"
							block
							@click="watchTrailer"
						>Trailer</b-button>
					
					</div>
				</div>
			</div>
		</div>
		
		<div class="watch mt-4 shadow">
			<plyr >
				<video crossorigin="anonymous">
					<source :src="'http://localhost:1337'+item.media.url" :type="item.media.mime" />
					
					
					<!-- Captions are optional -->
					<track
						v-for="(sub,index) in item.subtitles"
						:key="sub.id"
						:default="index === 0"
						kind="captions"
						:label="sub.language"
						:srclang="sub.language_code"
						:src="'http://localhost:1337'+sub.file.url"
					/>
				
				</video>
			</plyr>
		</div>
	
	</div>
</template>

<script>
	import Plyr from 'vue-plyr/dist/vue-plyr'
    import LoadingCard from "../components/LoadingCard";
	
    export default {
        name: "SingleVideo",
        components: {Plyr,LoadingCard},
        data() {
            return {
                item: null,
                subtitleReady: null,
	            subtitle: null
            }
        },
        mounted() {
			// console.log(this.$route.params.id)
            this.getVideo();
            
        },
        methods: {
            getVideo(){
                this.$store
                    .dispatch("video/getVideo", this.$route.params.id)
                    .then((response) => (this.item = response.data));

            },
            watchTrailer(){
                this.$store.commit('video/trailer',this.item.trailer)
                this.$bvModal.show('trailerModal')
            }

        }
    }
</script>

<style lang="scss" scoped>
.poster{
	max-height: 400px;
}

</style>
